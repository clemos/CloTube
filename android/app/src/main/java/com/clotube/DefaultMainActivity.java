package com.clotube;

import com.facebook.react.ReactActivity;
import com.applicaster.RNYouTubePlayer.YoutubePlayerReactPackage;

public class DefaultMainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "CloTube";
    }
}

