## Test Conditions

- TCND-01 - успішна авторизація валідного користувача;
- TCND-02 - авторизація з неправильним Username;
- TCND-03 - авторизація з неправильним Password;
- TCND-04 - авторизація з порожнім Username;
- TCND-05 - авторизація з порожнім Password;
- TCND-06 - авторизація заблокованого користувача.

## Checklist

- [ ] Успішна автооризація з валідними даними.
- [ ] Відмова в авторизації з неправильним Username.
- [ ] Відмова в авторизації з неправильним Password.
- [ ] Перевірка порожнього Username.
- [ ] Перевірка порожнього Password.
- [ ] Відмова в авторизації заблокованого користувача.

### TC-LOGIN-01 - Успішна авторизація standard_user

**Type:** Positive

**Preconditions:**
- Відкрита сторінка Login;
- користувач не авторизований.

**Test Data:**
- Username: standard_user;
- Password: secret_sauce.

**Steps:**
1. У поле Username ввести standard_user.
2. У поле Password ввести secret_sauce.
3. Натиснути кнопку Login.

**Expected Result:**
Після введення standard_user і правильного пароля та натискання Login користувач успішно авторизується.

**Actual Result:**
Після введення standard_user і правильного пароля та натискання Login відкривається сторінка Product.

**Result:**
Pass



### TC-LOGIN-02 - Провальна авторизація standard_user з невірним паролем

**Type:** Negative

**Preconditions:**
- Відкрита сторінка Login;
- користувач не авторизований.

**Test Data:**
- Username: standard_user;
- Password: wrong_password.

**Steps:**
1. У поле Username ввести standard_user.
2. У поле Password ввести wrong_password.
3. Натиснути кнопку Login.

**Expected Result:**
Після введення standard_user і неправильного пароля та натискання Login користувач не може авторизуватися та має попередження.

**Actual Result:**
Після введення standard_user і неправильного пароля та натискання Login користувач не може авторизуватися та має попередження Epic sadface: Username and password do not match any user in this service.

**Result:**
Pass


### TC-LOGIN-03 - Провальна авторизація заблокованого користувача locked_out_user

**Type:** Negative

**Preconditions:**
- Відкрита сторінка Login;
- користувач не авторизований.

**Test Data:**
- Username: locked_out_user;
- Password: secret_sauce.

**Steps:**
1. У поле Username ввести locked_out_user.
2. У поле Password ввести secret_sauce.
3. Натиснути кнопку Login.

**Expected Result:**
Після введення locked_out_user і правильного пароля та натискання Login користувач не авторизується та бачить попередження про блокування.

**Actual Result:**
Після введення locked_out_user і правильного пароля та натискання Login користувач не авторизується та бачить попередження про блокування Epic sadface: Sorry, this user has been locked out..

**Result:**
Pass


Decision Table
                                            R3  R4  R5
Username входить до списку допустимих?      F   T   F
Password правильний?                        T   F   F
Користувач заблокований?                    F   F   F
A1: Products                                        
A2: Locked message                                  
A3: Invalid credentials                     X   X   X

TC-LOGIN-02 => R4
TC-LOGIN-03 => R2


## Результат виконання
| Test Case |  Type    | Result|
|-----------|----------|-------|
|TC-LOGIN-02| Positive | Pass  |
|TC-LOGIN-02| Negative | Pass  |
|TC-LOGIN-02| Negative | Pass  |