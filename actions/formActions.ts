"use server";


export type FormActionProps = {
    name: string;
    email: string;
    message: string;
    mobile: string;
    isSigned: boolean;
}


export async function submitForm (formData: FormActionProps) {
    console.log(formData);
    
    const response = await fetch(process.env.GOOGLE_APP_SCRIPT_URL!, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });

    console.log(response);
    

    if (response) {
        return true;
    }
    return false;
}