import {
  View,
  Text,
  Image,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../../navigation/RootNavigator';
import useFetch from '../../services/usefetch';
import { fetchMovieDetails } from '../../services/api';

// type DetailsRouteProp = RouteProp<RootStackParamsList, 'Details'>;
type NavigationProp = NativeStackNavigationProp<RootStackParamsList>;

interface MovieInfoProps {
  label: string;
  value?: string | number | null;
}

const MovieInfo = ({ label, value }: MovieInfoProps) => (
  <View style={{ marginTop: 20 }}>
    <Text style={{ color: '#aaa', fontSize: 12 }}>{label}</Text>
    <Text style={{ color: '#fff', fontWeight: 'bold', marginTop: 6 }}>
      {value || 'N/A'}
    </Text>
  </View>
);

const DetailsScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<any>();

  const { id } = route.params;

  const { data: movie, loading } = useFetch(() => fetchMovieDetails(id));

  if (loading) {
    return (
      <View style={{ flex: 1, backgroundColor: '#000' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`,
          }}
          style={{ width: '100%', height: 550 }}
          resizeMode="stretch"
        />

        <View style={{ padding: 20 }}>
          <Text style={{ color: '#fff', fontSize: 22, fontWeight: 'bold' }}>
            {movie?.title}
          </Text>

          <Text style={{ color: '#aaa', marginTop: 5 }}>
            {movie?.release_date?.split('-')[0]} • {movie?.runtime}m
          </Text>

          <MovieInfo label="Overview" value={movie?.overview} />
          <MovieInfo
            label="Genres"
            value={movie?.genres?.map(g => g.name).join(' • ')}
          />
        </View>
      </ScrollView>

      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          backgroundColor: '#FF6F00',
          padding: 14,
          borderRadius: 10,
          alignItems: 'center',
        }}
        onPress={() => navigation.goBack()}
      >
        <Text style={{ color: '#fff', fontWeight: '600' }}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailsScreen;
