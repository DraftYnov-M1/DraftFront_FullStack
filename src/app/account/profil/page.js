import TitleMain from "@/components/UI/TitleMain";
import { getUser } from "@/lib/dal";

export default async function Page() {
    
    const user = await getUser();

    console.log(user);

    return (
        <div>
            <TitleMain title="Profil" />
            {
                user && (
                    <>
                        <p>FirstName: {user.firstName}</p>
                        <p>LastName: {user.lastName}</p>
                        <p>Mail: {user.mail}</p>
                    </>
                )
            }
        </div>
    );
}