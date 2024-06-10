const EntranceCard = ({ cardName, cardClass, Form, formChanger }: EntranceCard) => {
    return (
        <div className={`bg-added-oxfordblue p-1.5 480:p-3 sm:p-6 md:p-8 rounded ${cardClass}`}>
            <p className='text-center'>{cardName}</p>
            <div className='mt-2'>
                <Form buttonValue={cardName} />
            </div>
            <span>
                * برای{" "}
                <button
                    onClick={formChanger}
                    className='text-added-schoolbus '
                >
                    {cardName === "ورود" ? "عضویت" : "ورود"}
                </button>{" "}
                کلیک کنید
            </span>
        </div>
    )
}
export default EntranceCard
