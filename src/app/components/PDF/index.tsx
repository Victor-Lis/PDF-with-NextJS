"use client";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    color: "#202020",
  },
  titleSection: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 10,
    padding: 10,
  },
  section: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", 
    padding: 10,
  },
  textCenter: {
    textAlign: "center",
    fontSize: 14.5
  },
  subText: { 
    color: "#6f6f6f" 
  },
  viewer: {
    width: window.innerWidth, 
    height: window.innerHeight,
  },
});

function BasicDocument() {
  return (
    <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document>
        {/*render a single page*/}
        <Page size="A4" style={styles.page}>
          <View style={styles.titleSection}>
            <Text style={styles.textCenter}>Documento gerado usando lib "@react-pdf/renderer"</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
export default BasicDocument;