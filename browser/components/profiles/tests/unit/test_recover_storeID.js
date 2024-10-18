/* Any copyright is dedicated to the Public Domain.
https://creativecommons.org/publicdomain/zero/1.0/ */

"use strict";

add_setup(makeFakeProfileDirs);

add_task(
  {
    skip_if: () => !AppConstants.MOZ_SELECTABLE_PROFILES,
  },
  async function test_launcher() {
    let hash = xreDirProvider.getInstallHash();
    Services.prefs.setCharPref("toolkit.profiles.storeID", storeID);

    let profilesIni = `
[Profile0]
Name=default
IsRelative=1
Path=${toolkitProfile.leafName}

[Install${hash}]
Default=${toolkitProfile.leafName}
    `;
    await writeProfilesIni(profilesIni);
  }
);
