"use strict";

function makeHidden(list) {
  list.forEach((d) => {
    const maskedCardNumber = `****-****-****-${d.details.card_no.slice(-4)}`;
    const maskedPhoneNumber =
      d.details.mobile.slice(0, 6) + "***" + d.details.mobile.slice(9);

    d.details.card_no = maskedCardNumber;
    d.details.mobile = maskedPhoneNumber;
    d.is_secure = true;
  });

  return list;
}

module.exports = makeHidden;
