import colour
from fruit_dataset import apple_spectra

plotting_kwargs = {"show": False, "transparent_background": False, "tight_layout": True}

# Objects of interest
apple = colour.SpectralDistribution(apple_spectra, name="Apple Spectra")
colour.plotting.plot_single_sd(apple, filename="apple.png", **plotting_kwargs)

# Illuminants
colour.plotting.plot_single_illuminant_sd("D65", filename="d65.png", **plotting_kwargs)
colour.plotting.plot_single_sd(colour.SDS_LIGHT_SOURCES["3-LED-2 (473/545/616)"], filename="led3.png", **plotting_kwargs)
colour.plotting.plot_single_sd(colour.SDS_LIGHT_SOURCES["4-LED-2 (447/512/573/627)"], filename="led4.png", **plotting_kwargs)

# Combination
apple_interpolated = apple.copy()
apple_interpolated.interpolate(colour.SpectralShape(400, 770, 5))
sun_spectra = (colour.SDS_ILLUMINANTS["D65"] * apple_interpolated).trim(colour.SpectralShape(400, 770, 5))
sun_spectra.display_name = "Apple under sunlight"
colour.plotting.plot_single_sd(sun_spectra.normalise(), filename="appleInSun.png", name="Apple in sunlight", **plotting_kwargs)

led_spectra = (colour.SDS_LIGHT_SOURCES["3-LED-2 (473/545/616)"] * apple_interpolated).trim(colour.SpectralShape(400, 770, 5))
led_spectra.display_name = "Apple under RGB light"
colour.plotting.plot_single_sd(led_spectra.normalise(), filename="appleInLED.png", **plotting_kwargs)

# Gamut
colour.plotting.plot_RGB_chromaticities_in_chromaticity_diagram_CIE1931((255, 255, 255), colourspaces=["ITU-R BT.2020", "ITU-R BT.709", "sRGB"], filename="cie1931.png", **plotting_kwargs)

# Blackbody
blackbody_sds = [
    colour.sd_blackbody(i, colour.SpectralShape(400, 770, 10))
    for i in range(1000, 6000, 1000)
]
colour.plotting.plot_multi_sds(
    blackbody_sds,
    y_label="W / (sr m$^2$) / m",
    plot_kwargs={"use_sd_colours": False, "normalise_sd_colours": True},
    legend_location="upper right",
    filename="blackbody-visible",
    **plotting_kwargs
)
