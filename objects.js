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
const playlist = {Talal Maddah: 'song'}
function updatePlaylist(obj, key, value){
  return Opject.assign(obj, {[key]: value})
}