export default class UserService{
    public setLogged(data:any){
        sessionStorage.setItem('id', data?.id);
        sessionStorage.setItem('name',data?.name);
        sessionStorage.setItem('email', data?.email);
    };
    public getLogged(){
        return {
            id: sessionStorage.getItem('id'),
            name: sessionStorage.getItem('name'),
            email: sessionStorage.getItem('email'),
        }
    };
}