import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
        borderStyle: 'solid',
        borderWidth: 1,
        maxHeight: '35%'
    }
});

const GenerateTable = ({table}) => {
    const dateStart = new Date(table.startDate);
    const dateEnd = new Date(table.endDate);
    const daysOfYear = [];

    let loop = new Date(dateStart);
    while(loop <= dateEnd){
        daysOfYear.push(loop.toLocaleString('default', { month: 'short' }) + " " +loop.getFullYear())
        const newDate = loop.setMonth(loop.getMonth() + 1);
        loop = new Date(newDate);
    }
    console.log(daysOfYear);
    console.log(table);

    const returnTables = daysOfYear.map((days, index) =>
        <View style={styles.section} key={(index + 1).toString()} wrap={false}>
            <Text style={{ fontSize: 12 }}>RENT RECEIPT</Text>
            <Text style={{ fontSize: 11 , paddingTop: 5}}>{days}</Text>
            <Text style={{ fontSize: 11 , textAlign: 'right', paddingRight: '7%'}}> Receipt {(index + 1).toString()}</Text>
            <Text style={{ fontSize: 11,  paddingTop: '7%', paddingRight:'3%' }}>Received sum of $ {table.rent} from {table.name} towards the rent of property located at {table.address} for the period {days}</Text>
            <Text style={{ fontSize: 11 , paddingTop: 8}}>{table.owner} (Landlord)</Text>
            <Text style={{ fontSize: 11 , paddingTop: 8}}>{table.signature} (Signature)</Text>
        </View>
    );

    return (returnTables);
}

export default GenerateTable;