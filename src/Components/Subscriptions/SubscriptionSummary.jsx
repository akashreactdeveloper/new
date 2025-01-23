import React from "react";

const SubscriptionSummary = () => {
  return (
    <div className="subscription-summary-container">
      <div className="subscription-current-plan">
        <div className="bg-gray-100 flex justify-between p-2 items-center h-14">
          <div className="font-semibold ml-4">Current Plan Summary</div>
          <div className="w-20 bg-blue-600 rounded-lg text-white px-2 text-sm py-1 flex justify-between">Upgrade</div>
        </div>
        <div className="subscription-plan-detail">
          <div className="subscription-plan-name">
            <div className="subscription-plan-title">Plan Name</div>
            <div className="subscription-plan-type">Standard</div>
          </div>
          <div className="subscription-billing-cycle">
            <div className="subscription-plan-title">Billing Cycle</div>
            <div className="subscription-plan-type">Monthly</div>
          </div>
          <div className="subscription-billing-cost">
            <div className="subscription-plan-title">Plan Cost</div>
            <div className="subscription-plan-type">$330</div>
          </div>
        </div>
      </div>
      <div className="subscription-current-plan">
        <div className="bg-gray-100 flex justify-between p-2 items-center h-14">
          <div className="font-semibold ml-4">Payment Method</div>
        </div>
        <div className="subscription-plan-method">
          <div className="subscription-payment-method">
            <div className="subsrciption-inner">
              <div className="card-logo">
                <img
                  src="https://s3-alpha-sig.figma.com/img/061b/b107/e1e8605230d900ec14158f227664a78e?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Jnpu8D2UCvD-x~AkJC3SMyJglOYwB0IbSh58cMc6Sk0Qdyqk7VDR0JbE8~QTi-R4mwf6M-EUs2V4OggNiHlqxgu0u1zCsC032frWt0~8nSlsAzK~n75yk~oBFht5beRaHKuWIOqLpqpPp9LAq8BqH9B6oYxQSzdWwjqXJe7~iuOcGp7Ux5ae8-k1-vUiaeAESormSmtpF5Py6drbrkGMvNKy3nIfBrzeMkOa-SgJIvgvE32ZdS0qCagGNsHSCZMaKDr0nvE9U0b5FBwhyjGi5DSQAaf15v2~C5swwi76T7qKwa9FcwCAD7LtxOTqBlWGxAX87wXTHIj~yqnLLQhyWQ__"
                  alt=""
                  srcset=""
                  className="card-img"
                />
              </div>
              <div className="card-info">
                <div className="card-name">Master Card</div>
                <div className="card-number">**** **** **** 1234</div>
                <div className="card-expiry">Expiry On 0/2024</div>
              </div>
            </div>
            <div className="card-change-buttton">Change</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionSummary;
