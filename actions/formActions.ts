"use server";


type FormActionProps = {
    name: string;
    email: string;
    password: string;
}


export async function submitForm (formData: FormData) {
    const formattedData = new Map(formData.entries());

    try {
        const result = await fetch()
    } catch (error) {
        
    }
    
}