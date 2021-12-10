/* eslint-disable no-param-reassign */
export const linear = amount => amount;

export const quadraticIn = function(amount) {
  return amount * amount;
};
export const quadraticOut = function(amount) {
  return amount * (2 - amount);
};
export const quadraticInOut = function(amount) {
  if ((amount *= 2) < 1) {
    return 0.5 * amount * amount;
  }

  return -0.5 * (--amount * (amount - 2) - 1);
};
export const cubicIn = function(amount) {
  return amount * amount * amount;
};
export const cubicOut = function(amount) {
  return --amount * amount * amount + 1;
};
export const cubicInOut = function(amount) {
  if ((amount *= 2) < 1) {
    return 0.5 * amount * amount * amount;
  }
  return 0.5 * ((amount -= 2) * amount * amount + 2);
};

export const quarticIn = function(amount) {
  return amount * amount * amount * amount;
};
export const quarticOut = function(amount) {
  return 1 - --amount * amount * amount * amount;
};
export const quarticInOut = function(amount) {
  if ((amount *= 2) < 1) {
    return 0.5 * amount * amount * amount * amount;
  }

  return -0.5 * ((amount -= 2) * amount * amount * amount - 2);
};

export const quinticIn = function(amount) {
  return amount * amount * amount * amount * amount;
};
export const quinticOut = function(amount) {
  return --amount * amount * amount * amount * amount + 1;
};
export const quinticInOut = function(amount) {
  if ((amount *= 2) < 1) {
    return 0.5 * amount * amount * amount * amount * amount;
  }

  return 0.5 * ((amount -= 2) * amount * amount * amount * amount + 2);
};

export const sinusoidalIn = function(amount) {
  return 1 - Math.sin(((1.0 - amount) * Math.PI) / 2);
};
export const sinusoidalOut = function(amount) {
  return Math.sin((amount * Math.PI) / 2);
};
export const sinusoidalInOut = function(amount) {
  return 0.5 * (1 - Math.sin(Math.PI * (0.5 - amount)));
};

export const exponentialIn = function(amount) {
  return amount === 0 ? 0 : Math.pow(1024, amount - 1);
};
export const exponentialOut = function(amount) {
  return amount === 1 ? 1 : 1 - Math.pow(2, -10 * amount);
};
export const exponentialInOut = function(amount) {
  if (amount === 0) {
    return 0;
  }

  if (amount === 1) {
    return 1;
  }

  if ((amount *= 2) < 1) {
    return 0.5 * Math.pow(1024, amount - 1);
  }

  return 0.5 * (-Math.pow(2, -10 * (amount - 1)) + 2);
};
  
export const circularIn = function(amount) {
  return 1 - Math.sqrt(1 - amount * amount);
};
export const circularOut = function(amount) {
  return Math.sqrt(1 - --amount * amount);
};
export const circularInOut = function(amount) {
  if ((amount *= 2) < 1) {
    return -0.5 * (Math.sqrt(1 - amount * amount) - 1);
  }
  return 0.5 * (Math.sqrt(1 - (amount -= 2) * amount) + 1);
};
  
export const elasticIn = function(amount) {
  if (amount === 0) {
    return 0;
  }

  if (amount === 1) {
    return 1;
  }

  return -Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
};
export const elasticOut = function(amount) {
  if (amount === 0) {
    return 0;
  }

  if (amount === 1) {
    return 1;
  }
  return Math.pow(2, -10 * amount) * Math.sin((amount - 0.1) * 5 * Math.PI) + 1;
};
export const elasticInOut = function(amount) {
  if (amount === 0) {
    return 0;
  }

  if (amount === 1) {
    return 1;
  }

  amount *= 2;

  if (amount < 1) {
    return -0.5 * Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
  }

  return 0.5 * Math.pow(2, -10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI) + 1;
};
    
export const backIn = function(amount) {
  const s = 1.70158;
  return amount === 1 ? 1 : amount * amount * ((s + 1) * amount - s);
};
export const backOut = function(amount) {
  const s = 1.70158;
  return amount === 0 ? 0 : --amount * amount * ((s + 1) * amount + s) + 1;
};
export const backInOut = function(amount) {
  const s = 1.70158 * 1.525;
  if ((amount *= 2) < 1) {
    return 0.5 * (amount * amount * ((s + 1) * amount - s));
  }
  return 0.5 * ((amount -= 2) * amount * ((s + 1) * amount + s) + 2);
};
	
export const bounceOut = function(amount) {
  if (amount < 1 / 2.75) {
    return 7.5625 * amount * amount;
  } else if (amount < 2 / 2.75) {
    return 7.5625 * (amount -= 1.5 / 2.75) * amount + 0.75;
  } else if (amount < 2.5 / 2.75) {
    return 7.5625 * (amount -= 2.25 / 2.75) * amount + 0.9375;
  } else {
    return 7.5625 * (amount -= 2.625 / 2.75) * amount + 0.984375;
  }
};
export const bounceIn = function(amount) {
  return 1 - bounceOut(1 - amount);
};
export const bounceInOut = function(amount) {
  if (amount < 0.5) {
    return bounceIn(amount * 2) * 0.5;
  }
  return bounceOut(amount * 2 - 1) * 0.5 + 0.5;
};