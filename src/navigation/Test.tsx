import React, { useEffect, useState, useCallback } from 'react';
import Config from 'react-native-config';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import CustomHeader from '../components/CustomHeader';

/* ================= TMDB CONFIG ================= */

const TMDB_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzJjMzY1MzM5YTUxYjM5MmRkZGFjNzk4MGY4MDBlNCIsIm5iZiI6MTc2NzMzNjI0NC44ODEsInN1YiI6IjY5NTc2OTM0OWMyZjg0OGYzOWQ3YWU4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.klw0p79R6IhYywoBxkbnn9XgftnsPgLYSDrhMgAxMR0';
// console.log(Config.TMDB_APIKEY);

const TMDB_CONFIG = {
  BASE_URL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${TMDB_TOKEN}`,
  },
};

/* ================= TYPES ================= */

type Movie = {
  id: number;
  poster_path: string | null;
  title: string;
  vote_average: number;
  release_date: string;
};

/* ================= MOVIE CARD ================= */

const MovieCard = ({
  poster_path,
  title,
  vote_average,
  release_date,
}: Movie) => {
  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : 'https://placehold.co/600x400/1a1a1a/FFFFFF.png';

  return (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.image} />

      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>

      <Text style={styles.rating}>⭐ {Math.round(vote_average / 2)}</Text>

      <View style={styles.metaRow}>
        <Text style={styles.metaText}>{release_date?.split('-')[0]}</Text>
        <Text style={styles.metaText}>MOVIE</Text>
      </View>
    </TouchableOpacity>
  );
};

/* ================= SCREEN ================= */

export default function Test() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const fetchMovies = useCallback(async () => {
    try {
      setRefreshing(true);
      setError(null);

      const response = await fetch(
        `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`,
        { headers: TMDB_CONFIG.headers },
      );

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();
      setMovies(data.results);
    } catch (err: any) {
      console.error(err);
      setError(err.message);
    } finally {
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={{ color: 'red' }}>{error}</Text>
      </View>
    );
  }

  const renderItem = ({ item }: { item: Movie }) => <MovieCard {...item} />;

  return (
    <View style={styles.safeArea}>
      <CustomHeader title="Test" />

      <FlatList
        data={movies}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.container}
        renderItem={renderItem}
        refreshing={refreshing}
        onRefresh={fetchMovies}
        initialNumToRender={6}
        maxToRenderPerBatch={6}
        windowSize={7}
        removeClippedSubviews
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    padding: 10,
  },
  row: {
    justifyContent: 'space-around',
  },
  card: {
    width: '42%',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 8,
  },
  title: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: '700',
    color: '#fff',
  },
  rating: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
  },
  metaRow: {
    marginTop: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metaText: {
    fontSize: 11,
    color: '#aaa',
    fontWeight: '600',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});
