
import { getUser } from '@/lib/dal';
import TitleMain from '@/components/UI/TitleMain';

export default async function Page() {
    const user = await getUser();

    console.log(user);

    return (
        <div className="div">
            <TitleMain title="Profile" />
            {
                user ? (
                    <div>
                        <h1>{user.firstName} {user.lastName}</h1>
                        <p>{user.email}</p>
                    </div>
                ) : (
                    <h1>Unabled to get user</h1>
                )
            }
        </div>
    );

};

