import { createContext } from "react";
import { useQuery } from "react-query";
import api from "../../services/api";
import { removeAccents } from "../../utils";
import { format } from "date-fns";

const ChartsExpensesContext = createContext({});

const ChartsExpensesProvider = ({ children }) => {
  const queryAnimal = useQuery(["get-expenses-animal"], async () => {
    return api.get(
      "api/expenses/registration",
      { params: { page: 1 } },
      { headers: { "Content-Type": "application/json" } }
    );
  });

  const getExpenseCountByAnimal = (expenses, animalType) => {
    return expenses.filter((expense) => expense.type === animalType).length;
  };

  const findMostFrequentExpenses = (expenses) => {
    const occurrences = {};

    expenses.forEach((expense) => {
      const expenseName = expense.name;

      if (occurrences[expenseName]) {
        occurrences[expenseName]++;
      } else {
        occurrences[expenseName] = 1;
      }
    });

    const sortedExpenses = Object.entries(occurrences).sort(
      (a, b) => b[1] - a[1]
    );

    const mostFrequentExpenses = sortedExpenses
      .slice(0, 5)
      .reduce((result, [expenseName, count]) => {
        result[expenseName] = count;
        return result;
      }, {});

    return mostFrequentExpenses;
  };

  const findMostExpensiveAges = (expenses) => {
    const ageExpenses = {};

    expenses.forEach((expense) => {
      const age = expense.animal.age;
      const expenseValue = expense.value;

      if (ageExpenses[age]) {
        ageExpenses[age] += expenseValue;
      } else {
        ageExpenses[age] = expenseValue;
      }
    });

    const sortedAges = Object.entries(ageExpenses).sort((a, b) => b[1] - a[1]);

    const mostExpensiveAges = sortedAges.reduce((result, [age, total]) => {
      result[age] = total;
      return result;
    }, {});

    return mostExpensiveAges;
  };

  const calculateTotalExpensesByAnimal = (expenses) => {
    const totalExpensesByAnimal = {};

    expenses.forEach((expense) => {
      const animalType = expense.type;
      const expenseValue = expense.value;

      if (totalExpensesByAnimal[animalType]) {
        totalExpensesByAnimal[animalType] += expenseValue;
      } else {
        totalExpensesByAnimal[animalType] = expenseValue;
      }
    });

    return totalExpensesByAnimal;
  };

  const calculateTotalExpenses = (expenses) => {
    const totalExpenses = expenses.reduce((total, expense) => {
      return total + expense.value;
    }, 0);

    return totalExpenses;
  };

  const findTopExpenses = (expenses) => {
    const expensesMap = new Map();

    expenses.forEach((expense) => {
      const { name, value } = expense;

      if (expensesMap.has(name)) {
        expensesMap.set(name, expensesMap.get(name) + value);
      } else {
        expensesMap.set(name, value);
      }
    });

    const sortedExpenses = Array.from(expensesMap.entries()).sort(
      (a, b) => b[1] - a[1]
    );

    const topExpenses = sortedExpenses
      .slice(0, 5)
      .reduce((result, [name, value]) => {
        result[name] = value;
        return result;
      }, {});

    return topExpenses;
  };

  const calculateExpenseTotalByMonthYear = (expenses) => {
    const expenseTotals = {};

    expenses.forEach((expense) => {
      const { expense_date, value } = expense;
      const formattedDate = format(new Date(expense_date), "MM/yyyy");

      if (expenseTotals[formattedDate]) {
        expenseTotals[formattedDate] += value;
      } else {
        expenseTotals[formattedDate] = value;
      }
    });

    return expenseTotals;
  };
  const catExpenseCount =
    queryAnimal.isLoading === false &&
    getExpenseCountByAnimal(queryAnimal.data?.data?.content, "cat");

  const dogExpenseCount =
    queryAnimal.isLoading === false &&
    getExpenseCountByAnimal(queryAnimal.data?.data?.content, "dog");

  const mostFrequentExpenses =
    queryAnimal.isLoading === false &&
    findMostFrequentExpenses(queryAnimal.data?.data?.content);

  const nameExpenses =
    queryAnimal.isLoading === false && Object.keys(mostFrequentExpenses);

  const sortMostFrequentExpenses =
    queryAnimal.isLoading === false &&
    nameExpenses?.map(
      (item) => mostFrequentExpenses[removeAccents(item.toLowerCase())]
    );

  const mostExpensiveAges =
    queryAnimal.isLoading === false &&
    findMostExpensiveAges(queryAnimal.data?.data?.content);

  const nameAges = Object.keys(mostExpensiveAges);

  const totalExpensesByAnimal =
    queryAnimal.isLoading === false &&
    calculateTotalExpensesByAnimal(queryAnimal.data?.data?.content);

  const totalExpenses =
    queryAnimal.isLoading === false &&
    calculateTotalExpenses(queryAnimal.data?.data?.content);

  const topExpenses =
    queryAnimal.isLoading === false &&
    findTopExpenses(queryAnimal.data?.data?.content);

  const sortTopExpenses =
    queryAnimal.isLoading === false &&
    nameExpenses?.map((item) => topExpenses[removeAccents(item.toLowerCase())]);

  const dataExpenses =
    queryAnimal.isLoading === false &&
    calculateExpenseTotalByMonthYear(queryAnimal.data?.data?.content);

  const labelDate = Object.keys(dataExpenses);

  return (
    <ChartsExpensesContext.Provider
      value={{
        catExpenseCount,
        dogExpenseCount,
        nameExpenses,
        sortMostFrequentExpenses,
        nameAges,
        mostExpensiveAges,
        totalExpensesByAnimal,
        totalExpenses,
        sortTopExpenses,
        labelDate,
        dataExpenses,
      }}
    >
      {children}
    </ChartsExpensesContext.Provider>
  );
};

export { ChartsExpensesProvider, ChartsExpensesContext };
