const { expect, describe, it } = require("@jest/globals");

describe("correctCapitalization", () => {
  describe("when the first letter of the paragraph is lowercase", () => {
    it("fix the capitalization of the first letter in the paragraph", () => {
      const correctCapitalization = require("./main");
      
      const paragraph1 =
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras erat diam, laoreet volutpat laoreet faucibus, porta eu leo.";
      const paragraph2 =
        "suspendisse eu elit vitae massa mollis maximus. Praesent fringilla dolor augue, commodo elementum ante maximus sit amet. Suspendisse pellentesque mi eu aliquam rhoncus.";

      expect(correctCapitalization(paragraph1)).toBe(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras erat diam, laoreet volutpat laoreet faucibus, porta eu leo."
      );
      expect(correctCapitalization(paragraph2)).toBe(
        "Suspendisse eu elit vitae massa mollis maximus. Praesent fringilla dolor augue, commodo elementum ante maximus sit amet. Suspendisse pellentesque mi eu aliquam rhoncus."
      );
    });
  });

  describe("when the first letter of the sentence is lowercase", () => {
    it("fix the capitalization of the first letter in each sentence", () => {
      const correctCapitalization = require("./main");

      const paragraph1 =
        "Praesent nisl dolor, dictum id lobortis vel, placerat facilisis libero. pellentesque vehicula, enim at rhoncus commodo, lorem felis mattis enim, a imperdiet felis leo quis mi. sed et nibh quis dolor eleifend imperdiet. class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. sed blandit nisl turpis, sed congue neque pulvinar et.";
      const paragraph2 =
        "In laoreet auctor ligula vel maximus. sed viverra velit tellus, sodales elementum nulla auctor a. integer sit amet lobortis felis. pellentesque pulvinar tellus orci, eu pellentesque lorem elementum vitae. proin eget pellentesque arcu. sed placerat vitae tellus mattis lacinia. in mi risus, porta id lobortis vitae, ultricies ac ligula. suspendisse fringilla rhoncus nibh, ut lacinia est.";

      expect(correctCapitalization(paragraph1)).toBe(
        "Praesent nisl dolor, dictum id lobortis vel, placerat facilisis libero. Pellentesque vehicula, enim at rhoncus commodo, lorem felis mattis enim, a imperdiet felis leo quis mi. Sed et nibh quis dolor eleifend imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed blandit nisl turpis, sed congue neque pulvinar et."
      );
      expect(correctCapitalization(paragraph2)).toBe(
        "In laoreet auctor ligula vel maximus. Sed viverra velit tellus, sodales elementum nulla auctor a. Integer sit amet lobortis felis. Pellentesque pulvinar tellus orci, eu pellentesque lorem elementum vitae. Proin eget pellentesque arcu. Sed placerat vitae tellus mattis lacinia. In mi risus, porta id lobortis vitae, ultricies ac ligula. Suspendisse fringilla rhoncus nibh, ut lacinia est."
      );
    });
  });

  it("fix the capitalization of the first letter in the paragraph and the first letter in each sentence", () => {
    const correctCapitalization = require("./main");

    const paragraph1 =
      "ruangguru adalah sebuah perusahaan rintisan digital asal Indonesia yang bergerak di bidang pendidikan nonformal. ruangguru menawarkan platform pembelajaran berbasis kurikulum sekolah melalui video tutorial interaktif oleh guru dan animasi di aplikasi ponsel dan komputer. perusahaan ini didirikan oleh Belva Devara dan Iman Usman pada April 2014. pada tahun 2021 Ruangguru dinobatkan menjadi perusahaan paling inovatif peringkat 25 di dunia dan peringkat 2 dalam kategori pendidikan oleh Fast Company.";
    const paragraph2 =
      "neurons (also called neurones or nerve cells) are the fundamental units of the brain and nervous system, the cells responsible for receiving sensory input from the external world, for sending motor commands to our muscles, and for transforming and relaying the electrical signals at every step in between. more than that, their interactions define who we are as people. having said that, our roughly 100 billion neurons do interact closely with other cell types, broadly classified as glia (these may actually outnumber neurons, although it is not really known).";
    const paragraph3 =
      "dendrites are appendages that are designed to receive communications from other cells. they resemble a tree-like structure, forming projections that become stimulated by other neurons and conduct the electrochemical charge to the cell body (or, more rarely, directly to the axons). the surface of the dendrites is filled with receptors that become enacted upon by neurotransmitters that traversed the synapse after the pre-synaptic neuron fired and released neurotransmitters into the synapse. dendrites integrate this stimulation (from a multitude of receptors) and play a crucial role in determining the extent to which the received stimulation will result in an action potential. although dendrites have traditionally been regarded as receivers of the neurotransmission, recent research has found that dendrites can also release neurotransmitters into the synapse. this new data adds to our understanding of the incredible complexity of neuronal transmission.";

    expect(correctCapitalization(paragraph1)).toBe(
      "Ruangguru adalah sebuah perusahaan rintisan digital asal Indonesia yang bergerak di bidang pendidikan nonformal. Ruangguru menawarkan platform pembelajaran berbasis kurikulum sekolah melalui video tutorial interaktif oleh guru dan animasi di aplikasi ponsel dan komputer. Perusahaan ini didirikan oleh Belva Devara dan Iman Usman pada April 2014. Pada tahun 2021 Ruangguru dinobatkan menjadi perusahaan paling inovatif peringkat 25 di dunia dan peringkat 2 dalam kategori pendidikan oleh Fast Company."
    );
    expect(correctCapitalization(paragraph2)).toBe(
      "Neurons (also called neurones or nerve cells) are the fundamental units of the brain and nervous system, the cells responsible for receiving sensory input from the external world, for sending motor commands to our muscles, and for transforming and relaying the electrical signals at every step in between. More than that, their interactions define who we are as people. Having said that, our roughly 100 billion neurons do interact closely with other cell types, broadly classified as glia (these may actually outnumber neurons, although it is not really known)."
    );
    expect(correctCapitalization(paragraph3)).toBe(
      "Dendrites are appendages that are designed to receive communications from other cells. They resemble a tree-like structure, forming projections that become stimulated by other neurons and conduct the electrochemical charge to the cell body (or, more rarely, directly to the axons). The surface of the dendrites is filled with receptors that become enacted upon by neurotransmitters that traversed the synapse after the pre-synaptic neuron fired and released neurotransmitters into the synapse. Dendrites integrate this stimulation (from a multitude of receptors) and play a crucial role in determining the extent to which the received stimulation will result in an action potential. Although dendrites have traditionally been regarded as receivers of the neurotransmission, recent research has found that dendrites can also release neurotransmitters into the synapse. This new data adds to our understanding of the incredible complexity of neuronal transmission."
    );
  });
});
