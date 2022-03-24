import Song from "../interface/Song";

export default function songSorter(songList: Song[], colName: string): Song[] {
    if (songList.length <= 1) {
        return songList
    }

    // determine column data type
    const testValue = songList[0][colName];
    let colType = typeof testValue;

    if (colType === 'string') {
        const d = new Date(testValue);
        if (d instanceof Date && !isNaN(d.valueOf())) {
            colType = 'object';
        }
    }

    // sort based on column data type
    switch (colType) {
        case 'string':
            songList.sort((a, b) => {
                const col1 = String(a[colName]);
                const col2 = String(b[colName]);
                return col1.localeCompare(col2);
            })
            break;
        case 'object':
            songList.sort((a, b) => {
                const col1 = new Date(a[colName]);
                const col2 = new Date(b[colName]);
                return col2.getTime() - col1.getTime();
            })
            break;
        case 'number':
            songList.sort((a, b) => Number(b[colName]) - Number(a[colName]))
            break;
        default:
            console.warn('[helper.songSorter]Failed to identify sort type. Song sorting was aborted.')
    }

    return songList;
}