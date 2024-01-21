import { createContext, useCallback } from "react";
import { useQuery } from "react-query";
import api from "../../services/api";
import { removeAccents } from "../../utils";

const ChartsAdoptionContext = createContext({});

const ChartsAdoptionProvider = ({ children }) => {
  const queryCat = useQuery(["get-view-cat"], async () => {
    return api.get(
      "api/views/registration",
      { params: { type: "cat", page: 1 } },
      { headers: { "Content-Type": "application/json" } }
    );
  });

  const queryDog = useQuery(["get-view-dog"], async () => {
    return api.get(
      "api/views/registration",
      { params: { type: "dog", page: 1 } },
      { headers: { "Content-Type": "application/json" } }
    );
  });

  const dataAnimals = queryCat.data?.data?.content.concat(
    queryDog.data?.data?.content
  );

  const dataDistricts = queryCat.isLoading === false &&
    queryDog.isLoading === false && [
      ...new Set(dataAnimals?.map((item) => item?.district)),
    ];

  const dataAge = queryCat.isLoading === false &&
    queryDog.isLoading === false && [
      ...new Set(dataAnimals?.map((item) => item?.animal.age)),
    ];

  const countAnimalsByDistrict = useCallback((data, animalType) => {
    const counts = {};

    data.forEach((animal) => {
      const { district, type } = animal;

      if (type === animalType) {
        if (!counts[district]) {
          counts[district] = 1;
        } else {
          counts[district]++;
        }
      }
    });

    return counts;
  }, []);

  const countAnimalsByAge = useCallback((data) => {
    const counts = {
      filhote: 0,
      jovem: 0,
      adulto: 0,
      senior: 0,
    };

    data.forEach((animal) => {
      const { age } = animal.animal;

      if (removeAccents(age.toLowerCase()) === "filhote") {
        counts.filhote++;
      } else if (removeAccents(age.toLowerCase()) === "jovem") {
        counts.jovem++;
      } else if (removeAccents(age.toLowerCase()) === "adulto") {
        counts.adulto++;
      } else if (removeAccents(age.toLowerCase()) === "senior") {
        counts.senior++;
      }
    });

    return counts;
  }, []);

  const countAnimalsByGender = useCallback((data, animalType) => {
    const counts = {
      femea: 0,
      macho: 0,
    };

    data.forEach((animal) => {
      const { gender } = animal.animal;
      const { type } = animal;

      if (type === animalType) {
        if (gender === "Fêmea") {
          counts.femea++;
        } else if (gender === "Macho") {
          counts.macho++;
        }
      }
    });

    return counts;
  }, []);

  const countPersonalities = (data) => {
    const counts = {};

    data.forEach((animal) => {
      const { personalities } = animal.animal;

      if (personalities) {
        personalities.forEach((personality) => {
          const { name } = personality;

          if (!counts[name]) {
            counts[name] = 1;
          } else {
            counts[name]++;
          }
        });
      }
    });

    const sortedPersonalities = Object.entries(counts).sort(
      (a, b) => b[1] - a[1]
    );
    const top5Personalities = sortedPersonalities.slice(0, 4);

    const result = {};
    top5Personalities.forEach((entry) => {
      const [personality, count] = entry;
      result[personality] = count;
    });

    return result;
  };

  const countCastratedAnimals = (data, animalType) => {
    const counts = {
      castrated: 0,
      notCastrated: 0,
    };

    data.forEach((animal) => {
      const { castration } = animal.animal;
      const { type } = animal;

      if (type === animalType) {
        if (castration === "s") {
          counts.castrated++;
        } else {
          counts.notCastrated++;
        }
      }
    });

    return counts;
  };

  const catsByDistrict =
    queryCat.isLoading === false &&
    queryDog.isLoading === false &&
    countAnimalsByDistrict(dataAnimals, "cat");

  const dogsByDistrict =
    queryCat.isLoading === false &&
    queryDog.isLoading === false &&
    countAnimalsByDistrict(dataAnimals, "dog");

  const AnimalByAge =
    queryCat.isLoading === false &&
    queryDog.isLoading === false &&
    countAnimalsByAge(dataAnimals);

  const sortAnimalByAge =
    queryCat.isLoading === false &&
    queryDog.isLoading === false &&
    dataAge?.map((item) => AnimalByAge[removeAccents(item.toLowerCase())]);

  const catsByGender =
    queryCat.isLoading === false &&
    queryDog.isLoading === false &&
    countAnimalsByGender(dataAnimals, "cat");

  const dogsByGender =
    queryCat.isLoading === false &&
    queryDog.isLoading === false &&
    countAnimalsByGender(dataAnimals, "dog");

  const animalPersonalities =
    queryCat.isLoading === false &&
    queryDog.isLoading === false &&
    countPersonalities(dataAnimals);

  const sortAnimalPersonalities =
    queryCat.isLoading === false &&
    queryDog.isLoading === false &&
    dataAge?.map((item) => AnimalByAge[removeAccents(item.toLowerCase())]);

  const namePersonalities = Object.keys(animalPersonalities);

  const catsByCastraded =
    queryCat.isLoading === false &&
    queryDog.isLoading === false &&
    countCastratedAnimals(dataAnimals, "cat");

  const dogsByCastraded =
    queryCat.isLoading === false &&
    queryDog.isLoading === false &&
    countCastratedAnimals(dataAnimals, "dog");

  const counSearchTotal =
    queryCat.isLoading === false &&
    queryDog.isLoading === false &&
    dataAnimals.length;

  return (
    <ChartsAdoptionContext.Provider
      value={{
        dataDistricts,
        catsByDistrict,
        dogsByDistrict,
        dataAge,
        AnimalByAge,
        sortAnimalByAge,
        catsByGender,
        dogsByGender,
        animalPersonalities,
        namePersonalities,
        sortAnimalPersonalities,
        catsByCastraded,
        dogsByCastraded,
        counSearchTotal,
        loadingDog: queryDog.isLoading,
        loadingCat: queryCat.isLoading,
      }}
    >
      {children}
    </ChartsAdoptionContext.Provider>
  );
};

export { ChartsAdoptionProvider, ChartsAdoptionContext };
