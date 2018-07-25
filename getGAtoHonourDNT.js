/* functon that causes analytics.js or gat.js to honour DNT
*/
if(navigator.doNotTrack == 1) {
    // set value to true and call before the GA snippet;
    window['ga-disable-UA-XXXXX-Y'] = true;
    // e.g .  window['ga-disable-UA-1000000-1'] = true;

}
