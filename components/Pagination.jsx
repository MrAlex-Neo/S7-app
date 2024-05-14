import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Pagination = ({ sum, active }) => {
  const activePage = {
    color: 'bg-secondary', // Используем стиль React Native
    width: 'w-6', // Эквивалентно Tailwind 'w-6'
    height: 'h-3', // Эквивалентно Tailwind 'h-3'
  };
  const defaultPage = {
    color: 'bg-grayColor-100', // Эквивалентно 'bg-grayColor'
    width: 'w-3', // Эквивалентно 'w-3'
    height: 'h-3', // Эквивалентно 'h-3'
  };

  const paginationArray = []; // Инициализация массива
  for (let i = 1; i <= sum; i++) {
    if (i === active) {
      paginationArray.push(activePage);
    } else {
      paginationArray.push(defaultPage);
    }
  }

  return (
    <View className="flex-row gap-3">
      {paginationArray.map((i, index) => (
        <View key={index} className={`${i.color} ${i.width} ${i.height} rounded-full`} /> // Используем правильный стиль
      ))}
    </View>
  );
};

export default Pagination;
