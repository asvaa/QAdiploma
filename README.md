# Дипломный проект - Автоматизация тестирования

Проект по автоматизации тестирования для курса QA Guru.

**Автор:** Адам Мусаев

---

## Описание

Автотесты на Playwright для тестирования веб-приложений (UI и API).

---

## Что использовал

- Playwright - для UI тестов
- JavaScript - язык программирования
- Faker.js - генерация тестовых данных
- Allure - отчёты
- GitHub Actions - автоматический запуск тестов
- Telegram - уведомления о результатах

---

## Тесты

### UI тесты (7 штук)

Тестирую сайт: https://demowebshop.tricentis.com/

1. Регистрация нового пользователя
2. Проверка формы регистрации
3. Добавление товара в корзину
4. Поиск товара (работает)
5. Поиск товара (не работает)
6. Открытие главной страницы
7. Проверка логотипа

### API тесты (5 штук)

Тестирую API: https://petstore.swagger.io/v2

1. Создание питомца
2. Получение питомца
3. Обновление питомца
4. Удаление питомца
5. Проверка полей

**Всего: 12 тестов**

---

## Структура проекта

```
pages/          - Page Objects для UI
services/       - Service для API
helpers/        - генератор данных
tests/ui/       - UI тесты
tests/api/      - API тесты
.github/        - настройки GitHub Actions
```

---

## Как запустить

```bash
npm install
npx playwright install
npm test
```

Другие команды:

- `npm run ui` - только UI тесты
- `npm run api` - только API тесты
- `npm run report` - открыть отчёт

---

## Отчёты

- **Allure Report:** https://asvaa.github.io/QAdiploma
- **Allure TestOps:** https://allure.autotests.cloud/

---

## CI/CD

При каждом коммите в main:

- Запускаются тесты
- Генерируется отчёт Allure
- Результаты загружаются в Allure TestOps
- Приходит уведомление в Telegram

---

## Скриншоты

### GitHub Actions

![GitHub Actions](docs/screenshots/github-actions.png)

### Telegram

![Telegram](docs/screenshots/telegram-notification.png)

### Allure Report

![Allure](docs/screenshots/allure-overview.png)

### Allure TestOps

![TestOps](docs/screenshots/allure-testops-overview.png)

---

## Контакты

GitHub: [@asvaa](https://github.com/asvaa)
