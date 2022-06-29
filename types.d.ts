// Artist Search Data Type
// ___________________________________________________________________
interface ArtistDataType {
  id: number;
  readable: boolean;
  title: string;
  title_short: string;
  title_version: TitleVersion;
  link: string;
  duration: number;
  rank: number;
  explicit_lyrics: boolean;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  preview: string;
  md5_image: string;
  artist: Artist;
  album: Album;
  type: TrackType;
}

interface Album {
  id: number;
  title: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  md5_image: string;
  tracklist: string;
  type: AlbumType;
}

enum AlbumType {
  Album = "album",
}

interface Artist {
  id: number;
  name: Name;
  link: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  tracklist: string;
  type: ArtistType;
}

enum Name {
  MeekMill = "Meek Mill",
  RoddyRicch = "Roddy Ricch",
  TheHitForce = "The HitForce",
  Wale = "Wale",
}

enum ArtistType {
  Artist = "artist",
}

enum TitleVersion {
  Empty = "",
  Instrumental = "(Instrumental)",
}

enum TrackType {
  Track = "track",
}


// Artist Detail Type

// ___________________________________________________________________

interface ArtistDetailType {
  id:             number;
  name:           string;
  link:           string;
  share:          string;
  picture:        string;
  picture_small:  string;
  picture_medium: string;
  picture_big:    string;
  picture_xl:     string;
  nb_album:       number;
  nb_fan:         number;
  radio:          boolean;
  tracklist:      string;
  type:           string;
}

// Tracklist type
// ___________________________________________________________________

interface TrackListType {
  id:                      number;
  readable:                boolean;
  title:                   string;
  title_short:             string;
  title_version:           string;
  link:                    string;
  duration:                number;
  rank:                    number;
  explicit_lyrics:         boolean;
  explicit_content_lyrics: number;
  explicit_content_cover:  number;
  preview:                 string;
  contributors:            Contributor[];
  md5_image:               string;
  artist:                  Artist;
  album:                   Album;
  type:                    string;
}

interface Album {
  id:           number;
  title:        string;
  cover:        string;
  cover_small:  string;
  cover_medium: string;
  cover_big:    string;
  cover_xl:     string;
  md5_image:    string;
  tracklist:    string;
  type:         string;
}

interface Artist {
  id:        number;
  name:      string;
  tracklist: string;
  type:      string;
}

interface Contributor {
  id:             number;
  name:           string;
  link:           string;
  share:          string;
  picture:        string;
  picture_small:  string;
  picture_medium: string;
  picture_big:    string;
  picture_xl:     string;
  radio:          boolean;
  tracklist:      string;
  type:           string;
  role:           string;
}


// SEO component

// ___________________________________________________________________
interface SeoTypes{
  title: string;
  description: string;
  currentUrl?: string;
  locale?: string;
}