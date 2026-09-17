'use strict';

/**
 * Проверяет, является ли значение валидным объектом
 * @param {*} value - проверяемое значение
 * @returns {boolean}
 */
const isValidObject = (value) => {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
}

/**
 * Функция, которая принимает два объекта и возвращает новый объект,
 * содержащий только те свойства, которые уникальны для каждого из объектов
 *
 * @param {Object} firstObject - первый объект для сравнения
 * @param {Object} secondObject - второй объект для сравнения
 *
 * @example
 * * // returns {cat: 2, hamster: 4}
 * const pets1 = {cat: 2, dog: 1, parrot: 3};
 * const pets2 = {dog: 1, parrot: 3, hamster: 4};
 * findUniqueProperties(pets1, pets2);
 *
 * @returns {Object} новый объект, содержащий только уникальные свойства
 */
function findUniqueProperties(firstObject, secondObject) {
  if (!isValidObject(firstObject) || !isValidObject(secondObject)) {
    throw new TypeError(
      'Оба аргумента функции findUniqueProperties должны быть валидными объектами.',
    );
  }

  const resultObject = {};

  Object.keys(firstObject).forEach((key) => {
    if (!Object.hasOwn(secondObject, key)) {
      resultObject[key] = firstObject[key];
    }
  });

  Object.keys(secondObject).forEach((key) => {
    if (!Object.hasOwn(firstObject, key)) {
      resultObject[key] = secondObject[key];
    }
  });

  return resultObject;
}
