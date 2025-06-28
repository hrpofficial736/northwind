"use server";


type FormActionProps = {
    name: string;
    email: string;
    password: string;
    mobile: number;

}


export async function submitForm (formData: FormData) {
    console.log({
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        mobile: formData.get("mobile")
    })
    
    console.log();
    
}