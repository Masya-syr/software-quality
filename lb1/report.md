# Лабораторна робота №1

## Аналіз якості програмного продукту. Виявлення та
документування аномалій

**Виконав:** Сирота Максим
**Група:** 6.1213-2 пі
**Дата виконання:** 12.09.2026

## Тестовий об’єкт
SauceDemo
https://www.saucedemo.com/

## Тестове середовище
- Операційна система: Windows 11
- Браузер: Google Chrome
- Дата тестування: 12.09.2026

## Базовий сценарій
За допомогою облікового запису `standard_user` було перевірено
авторизацію, перегляд каталогу, додавання товару до кошика та
оформлення замовлення.
Основний сценарій було завершено успішно.

## Виявлені аномалії
№1
performance_glitch_user
Затримка відкриття Products
Medium
Medium
[Issue](https://github.com/Masya-syr/software-quality/issues/1)

№2
problem_user
Непрацюючий фільтр Products
High
High
[Issue](https://github.com/Masya-syr/software-quality/issues/2)

№3
problem_user
Помилкова обрабка поля Призвище
Critical
Critical
[Issue](https://github.com/Masya-syr/software-quality/issues/4)

## Висновок