import _formatImdbVotes from "../../../_utils/_formatImdbVotes";
import _useTextTranslator from "../../../_utils/_useTextTranslator";

const ImdbSection = ({ imdb_rating, imdb_votes }: { imdb_rating: string; imdb_votes: string }) => {
    return (
        <div className='text-center w-20 justify-self-end h-10'>
            <p>
                <span className='font-bold text-added-schoolbus'>{imdb_rating}</span>/10
            </p>
            <div className='bg-added-schoolbus h-0.5 w-full'></div>
            <div className='flex justify-center'>
                <div className='flex items-center rtl:flex-row-reverse ltr:mr-1.5 rtl:ml-1.5'>
                    <span>{_formatImdbVotes(imdb_votes).number}</span>
                    <span>{_formatImdbVotes(imdb_votes).prefix}</span>
                </div>
                {_useTextTranslator("رای", "vote")}
            </div>
        </div>
    )
}
export default ImdbSection
