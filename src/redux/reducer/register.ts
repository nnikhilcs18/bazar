export const REGISTER_USER="REGISTER_USER";
const SET_REGISTER_USER="SET_REGISTER_USER";

const initialState={
    reguser:null,
    email:null,
    password:null,
};

export const registerUser=(email,password)=>({
    type:REGISTER_USER,
    email:email,
    password:password,
})
export const setRegisterUser=(reguser)=>({
    type:SET_REGISTER_USER,
    reguser:reguser
})

export default (state=initialState,action)=>{
    switch(action.type)
    {
        case SET_REGISTER_USER:
            
            {
                const {reguser}=action;
                return {...state,reguser:reguser}
            }
        default:
        {
            return state ;
        }
    }
}