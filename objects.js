/*var playlist = {
  artist: 'song pair'
};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
  // return Object.assign({}, playlist, {[artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.Slowdive;
  // return playlist
}

*/
const playlist = {'Talal Maddah': 'A7ebak lo'}
function updatePlaylist(obj, key, value){
  obj[key]= value;
  return obj
}

function removeFromPlaylist(obj, key){
  delete obj.key
  return obj;
}