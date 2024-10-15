import colour
import colour_datasets

print(colour_datasets.load("3269924")["aspenWb"].keys())
colour.plotting.plot_single_sd(colour_datasets.load("3269924")["aspenWb"]["1"])

# TODO: make these auto generate pngs in the root directory
colour.plotting.plot_single_illuminant_sd("D65")
colour.plotting.plot_single_sd(colour.SDS_LIGHT_SOURCES["3-LED-2 (473/545/616)"])


colour.plotting.plot_single_sd((colour.SDS_ILLUMINANTS["D65"] * colour_datasets.load("3269924")["aspenWb"]["1"])[1])
