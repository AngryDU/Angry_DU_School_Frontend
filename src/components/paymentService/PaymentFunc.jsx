import React from 'react';

const  PaymentFunc=({  descendOrderIdForStudCard,
    descendTutDataForStudCard,
    descendOrderSubjForStudCard,
    descendOrderStateForStudCard,
    descendOrderStartDateForStudCard,
    descendOrderPaymentStatusForStudCard})=> {



        console.log(descendOrderIdForStudCard,
            descendTutDataForStudCard,
            descendOrderSubjForStudCard,
            descendOrderStateForStudCard,
            descendOrderStartDateForStudCard,
            descendOrderPaymentStatusForStudCard)
  return (
    <>
    <p>функционал отражения оплаты</p>
    <p>Поднятый конкретный и уже одобренный учителем объект-заказ студента оснащён уже внизу до поднятия новой парой ключ:значение (paymentStatus:pay) , поднят в APP (поднят уже ранее для STudOrder, но с новой парой уже )и спущен сюда сверху из APP </p>
    <p>Но там же внизу я тебе POST-запрос шлю с оговоренным endpoint - purchase </p>
    </>

  )
}
export default PaymentFunc;
