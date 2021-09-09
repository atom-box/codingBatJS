let repeatFront = (s, i) => {
    if (typeof s !== 'string'){
        return 'Try again: please enter a word';
    }
    if (s.length < 7){
        return `${s.length} is too short`;
    }

    // take a chunk of the front
    let firstBite = s.slice(0, i);

    // recursive
    let layBricks = (fragment) => {
        if (fragment.length <= 1) {
            return fragment;
        }
        was = fragment;
        fragment = fragment.slice(0, fragment.length - 1);
        console.log('was length ' + was.length + 'frag length: ' + fragment.length);
        return was + layBricks(fragment);
    }

    return layBricks(firstBite);
}
