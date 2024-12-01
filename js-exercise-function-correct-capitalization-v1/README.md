# Correct Capitalization

### Description

Pada _file_ `main.js`, buatlah sebuah `function` yang akan menerima sebuah `parameter` berupa `string`.
`Function` tersebut akan mengembalikan nilai berupa `string` yang berisi _paragraph_ dengan penggunaan huruf kapital yang benar, dimana **huruf pertama dari paragraph** dan **huruf pertama setelah tanda baca titik menjadi huruf besar**.

Berilah nama `function` tersebut dengan `correctCapitalization`.

### Constraints

- Name of the function must be `correctCapitalization`
- Function hanya menerima 1 parameter

### Test Case Examples

#### Test Case 1

**Input**:

```txt
ruangguru adalah sebuah perusahaan rintisan digital asal Indonesia yang bergerak di bidang pendidikan nonformal. ruangguru menawarkan platform pembelajaran berbasis kurikulum sekolah melalui video tutorial interaktif oleh guru dan animasi di aplikasi ponsel dan komputer. perusahaan ini didirikan oleh Belva Devara dan Iman Usman pada April 2014. pada tahun 2021 Ruangguru dinobatkan menjadi perusahaan paling inovatif peringkat 25 di dunia dan peringkat 2 dalam kategori pendidikan oleh Fast Company.
```

**Expected Output / Behavior**:

```txt
Ruangguru adalah sebuah perusahaan rintisan digital asal Indonesia yang bergerak di bidang pendidikan nonformal. Ruangguru menawarkan platform pembelajaran berbasis kurikulum sekolah melalui video tutorial interaktif oleh guru dan animasi di aplikasi ponsel dan komputer. Perusahaan ini didirikan oleh Belva Devara dan Iman Usman pada April 2014. Pada tahun 2021 Ruangguru dinobatkan menjadi perusahaan paling inovatif peringkat 25 di dunia dan peringkat 2 dalam kategori pendidikan oleh Fast Company.
```

**Explanation**:

```txt
Kata pertama pada paragraf di atas adalah "ruangguru" dimana huruf "r" pada kata tersebut bukan merupakan huruf kapital sehingga perlu diubah menjadi huruf kapital sehingga menjadi "Ruangguru". Lalu selanjutnya, kata pertama pada kalimat selanjutnya adalah "ruangguru" dimana huruf "r" pada kata tersebut bukan merupakan huruf kapital sehingga perlu diubah menjadi huruf kapital sehingga menjadi "Ruangguru". Begitu pun di kalimat-kalimat selanjutnya.
```

#### Test Case 2

**Input**:

```txt
neurons (also called neurones or nerve cells) are the fundamental units of the brain and nervous system, the cells responsible for receiving sensory input from the external world, for sending motor commands to our muscles, and for transforming and relaying the electrical signals at every step in between. more than that, their interactions define who we are as people. having said that, our roughly 100 billion neurons do interact closely with other cell types, broadly classified as glia (these may actually outnumber neurons, although it is not really known).
```

**Expected Output / Behavior**:

```txt
Neurons (also called neurones or nerve cells) are the fundamental units of the brain and nervous system, the cells responsible for receiving sensory input from the external world, for sending motor commands to our muscles, and for transforming and relaying the electrical signals at every step in between. More than that, their interactions define who we are as people. Having said that, our roughly 100 billion neurons do interact closely with other cell types, broadly classified as glia (these may actually outnumber neurons, although it is not really known).
```

**Explanation**:

```txt
Kata pertama pada paragraf di atas adalah "neurons" dimana huruf "n" pada kata tersebut bukan merupakan huruf kapital sehingga perlu diubah menjadi huruf kapital sehingga menjadi "Neurons". Lalu selanjutnya, kata pertama pada kalimat selanjutnya adalah "more" dimana huruf "m" pada kata tersebut bukan merupakan huruf kapital sehingga perlu diubah menjadi huruf kapital sehingga menjadi "More". Begitu pun di kalimat-kalimat selanjutnya.
```

#### Test Case 3

**Input**:

```txt
dendrites are appendages that are designed to receive communications from other cells. they resemble a tree-like structure, forming projections that become stimulated by other neurons and conduct the electrochemical charge to the cell body (or, more rarely, directly to the axons). the surface of the dendrites is filled with receptors that become enacted upon by neurotransmitters that traversed the synapse after the pre-synaptic neuron fired and released neurotransmitters into the synapse. dendrites integrate this stimulation (from a multitude of receptors) and play a crucial role in determining the extent to which the received stimulation will result in an action potential. although dendrites have traditionally been regarded as receivers of the neurotransmission, recent research has found that dendrites can also release neurotransmitters into the synapse. this new data adds to our understanding of the incredible complexity of neuronal transmission.
```

**Expected Output / Behavior**:

```txt
Dendrites are appendages that are designed to receive communications from other cells. They resemble a tree-like structure, forming projections that become stimulated by other neurons and conduct the electrochemical charge to the cell body (or, more rarely, directly to the axons). The surface of the dendrites is filled with receptors that become enacted upon by neurotransmitters that traversed the synapse after the pre-synaptic neuron fired and released neurotransmitters into the synapse. Dendrites integrate this stimulation (from a multitude of receptors) and play a crucial role in determining the extent to which the received stimulation will result in an action potential. Although dendrites have traditionally been regarded as receivers of the neurotransmission, recent research has found that dendrites can also release neurotransmitters into the synapse. This new data adds to our understanding of the incredible complexity of neuronal transmission.
```

**Explanation**:

```txt
Kata pertama pada paragraf di atas adalah "dendrites" dimana huruf "D" pada kata tersebut bukan merupakan huruf kapital sehingga perlu diubah menjadi huruf kapital sehingga menjadi "Dendrites". Lalu selanjutnya, kata pertama pada kalimat selanjutnya adalah "they" dimana huruf "t" pada kata tersebut bukan merupakan huruf kapital sehingga perlu diubah menjadi huruf kapital sehingga menjadi "They". Begitu pun di kalimat-kalimat selanjutnya.
```
