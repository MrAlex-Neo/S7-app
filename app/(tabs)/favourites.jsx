import { View, Text } from 'react-native'
import SearchInput from '../../components/SearchInp'
import { useTranslation } from 'react-i18next'

const Favourites = () => {
  const { t, i18n } = useTranslation();

  return (
    <View className="w-full flex-1 py-[7vh] px-[5vw] bg-white">
      <Text className="text-2xl font-robotoMedium mb-[2vh]">{t('favourites')}</Text>
      <SearchInput
        placeholder={t('searchText')}
      />
    </View>
  )
}

export default Favourites