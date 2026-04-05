import UserRepository  from '@/repository/userRepository';

let userService = {
    async setLogged(){
        let repo = new UserRepository();
        let user = await repo.logged();
        sessionStorage.setItem('id', user?.id);
        sessionStorage.setItem('name',user?.name);
        sessionStorage.setItem('email', user?.email);
    },
    getLogged(){
        return {
            id: sessionStorage.getItem('id'),
            name: sessionStorage.getItem('name'),
            email: sessionStorage.getItem('email'),
        }
    }
};

export default userService;