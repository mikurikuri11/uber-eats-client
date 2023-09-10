// let selectedFoods: Array<{
//   id: string;
//   name: string;
//   price: number;
//   description: string;
//   created_at: string;
//   updated_at: string;
// }> = [];

// // const selectedFoods: Array<object> = [];

// // ループ内の非同期操作を逐次実行するための関数を作成
// const fetchSelectedFood = async (restaurantId: string, foodId: string) => {
//   try {
//     const selectedFood = await getFood(restaurantId, foodId);
//     return selectedFood;
//   } catch (error) {
//     console.error('エラーが発生しました:', error);
//     return null; // エラー時にnullを返すか、適切なエラーハンドリングを行う
//   }
// };

// // lineFoodIdsを非同期に処理
// const fetchAllSelectedFoods = async () => {
//   for (const foodId of foodIds) {
//     const selectedFood = await fetchSelectedFood(restaurantId, foodId);
//     if (selectedFood !== null) {
//       selectedFoods.push(selectedFood);
//     }
//   }
// };

// // 上記の非同期処理を実行
// fetchAllSelectedFoods()
//   .then(() => {
//     console.log('すべての選択された食品を取得しました');
//     console.log(selectedFoods);
//   })
//   .catch((error) => {
//     console.error('エラーが発生しました:', error);
//   });