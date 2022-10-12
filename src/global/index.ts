import installComponents from './components/index';

const createGlobal = (app: any): void => {
    installComponents(app);
};

export default createGlobal;
