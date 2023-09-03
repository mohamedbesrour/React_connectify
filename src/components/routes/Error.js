// import '../style/errorPage.css';
import '../../styles/header.css'
import Text from '../home/text'
function errorPage() {
    return (
        <>
            <div className='errorPage'>
                <Text
                    cName="Erreur"
                    text="Page Erreur"
                    text2="Rendez-vous à l'une des pages disponibles sur le menu."
                />
            </div>
        </>
    )
}
export default errorPage;