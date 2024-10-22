import csv

TARGET_DATASET = "A4"
OUT_FILENAME = "fruit_dataset.py"
SPECTRAL_MAX = 825
SPECTRAL_MIN = 300

out_dict = dict()


def add_to_defns(data, file, nicename):
    with open(file, mode="a") as f:
        f.write(f"{nicename} = {data}")


# Clear out existing spectra 
open(OUT_FILENAME, 'w').close()

with open("/Users/reid/Downloads/SpectroFood_dataset.csv") as f:
    dataset = csv.DictReader(f)
    dataset.fieldnames[0] = "Target"
    for row in dataset:
        # It's not always a leek
        if row["Target"] == TARGET_DATASET:
            for key, val in row.items():
                try:
                    if not (float(key) > SPECTRAL_MAX or float(key) < SPECTRAL_MIN):
                        out_dict.update({float(key): float(val)})
                except ValueError:
                    continue
            add_to_defns(out_dict, "fruit_dataset.py", "apple_spectra")
