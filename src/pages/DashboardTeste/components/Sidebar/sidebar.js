import './sidebar.css';
import vamosadotar from '../../../../assets/vamosadotar.png';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? 'sidebar-responsive' : ''} id='sidebar'>
      <div className='sidebar__tutle'>
        <div className='sidebar__img'>
          <img src={vamosadotar} alt='logo' />
          <h1>TEste</h1>
        </div>

        <i
          onClick={() => closeSidebar()}
          className='fa fa-times'
          id='sidebarIcon'
          aria-hidden='true'
        ></i>
      </div>
      <div className='sidebar__menu'>
        <div className='sidebar__link active_menu_link'>
          <i className='fa fa-minus-square'></i>
          <a href='#'>Home</a>
        </div>
        <h2>ADMIN</h2>
        <div className='sidebar__link'>
          <i className='fa fa-tachometer'></i>
          <a href='#'>Área Administrativa</a>
        </div>

        <div className='sidebar__link'>
          <i className='fa fa-tachometer'></i>
          <a href='#'>Área Administrativa</a>
        </div>

        <div className='sidebar__link'>
          <i className='fa fa-tachometer'></i>
          <a href='#'>Área Administrativa</a>
        </div>


      </div>
    </div>
  );
};

export default Sidebar;
