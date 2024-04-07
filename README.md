# PDF with NextJS
Esse projeto surgiu na verdade vindo da demanda de um projeto maior que estou realizando (que ainda não tornei público por aqui), onde eu precisaria exibir uma tabela de dados em um PDF para posteriormente ser impresso.

Pesquisando algumas libs encontrei a lib [HTML2PDF](https://www.npmjs.com/package/react-html2pdf), mas não me adaptei muito. No fim optei pela [React PDF](https://react-pdf.org/), onde basicamente funciona com 'StyleSheets' para estilização e componentes já existentes para construção do PDF, em um geral sendo bem familiar ao React Native que já estou acostumado, tendo componentes como: View, Text, Image, componentes esses que funcionam basicamente iguais no React Native, também tem alguns componentes novos como: PDFViewer, Document, Page, Link, Note, Canvas, entre outros... Achei bem fácil a utilização da documentação então por conta de todos esses fatores optei pelo uso da lib [React PDF](https://react-pdf.org/) mesmo.

## Uso

1- Download da lib (no meu caso usando npm)
```cmd
npm i @react-pdf/renderer
```


2- Import dos componentes desejados
```jsx
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
```


3- Aplicação dos componentes, deixo abaixo um modelinho de página simples
```jsx
function BasicDocument() {
  return (
    <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document>
        {/*render a single page*/}
        <Page size="A4" style={styles.page}>
          <View style={styles.titleSection}>
            <Text style={styles.textCenter}>Documento gerado usando lib "@react-pdf/renderer"</Text>
            <Text style={styles.textCenter}>Projeto feito por Dev Victor Lis (https://github.com/Victor-Lis)</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
```

## Observação importante!
Como o próprio nome já sugere a lib é feita sendo planejada para o React Vanilla, sendo assim ela precisa rodar no Client-Side, então ao utilizar essa lib com Next precisamos deixar a marcação 'use client' no topo do componente que usa a lib. Seguindo o modelo abaixo na primeira linha:
```jsx
'use client'
```

## Autores
- [@Victor-Lis](https://github.com/Victor-Lis)
