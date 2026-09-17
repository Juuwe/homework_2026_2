'use strict';

QUnit.module('Тестируем функцию findUniqueProperties', function() {
    QUnit.test('Работает правильно для объектов с уникальными свойствами', function(assert) {
        const result = findUniqueProperties(
            { a: 1, b: 2, c: 3 },
            { b: 2, c: 4, d: 5 }
        );

        assert.deepEqual(result, { a: 1, d: 5 }, 'Должны быть уникальные свойства из обоих объектов.');
    });

    QUnit.test('Работает правильно для объекты с отсутствующими свойствами', function(assert) {
        const result = findUniqueProperties(
            { x: 10, y: 20 },
            { y: 20, z: 30 }
        );

        assert.deepEqual(result, { x: 10, z: 30 }, 'Должны быть уникальные свойства x и z.');
    });

    QUnit.test('Работает правильно для идентичных объектов', function(assert) {
        const result = findUniqueProperties(
            { a: 1, b: 2 },
            { a: 1, b: 2 }
        );

        assert.deepEqual(result, {}, 'Идентичные объекты должны вернуть пустой объект.');
    });

    QUnit.test('Работает правильно для двух пустых объектов', function(assert) {
        const result = findUniqueProperties({}, {});

        assert.deepEqual(result, {}, 'Для двух пустых объектов должен возвращаться пустой объект.');
    });

    QUnit.test('Работает правильно в случае, когда один из объектов пустой', function(assert) {
        const result = findUniqueProperties(
            { a: 1, b: 2 },
            {}
        );

        assert.deepEqual(result, { a: 1, b: 2 }, 'Должны вернуться все свойства непустого объекта.');
    });

    QUnit.test('Работает правильно в случае, если у объектов нет общих ключей', function(assert) {
        const result = findUniqueProperties(
            { a: 2, b: 1 },
            { c: 10, d: 20 }
        );

        assert.deepEqual(result, { a: 2, b: 1, c: 10, d: 20 }, 'Два объекта без общих ключей возвращают совокупность своих свойств.');
    });
});
