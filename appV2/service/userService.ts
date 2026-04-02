let userService = {
    setLogged(data:any){
        sessionStorage.setItem('id', data?.id);
        sessionStorage.setItem('name',data?.name);
        sessionStorage.setItem('email', data?.email);
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