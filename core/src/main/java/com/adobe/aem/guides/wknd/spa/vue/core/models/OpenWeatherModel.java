package com.adobe.aem.guides.wknd.spa.vue.core.models;

import com.adobe.cq.export.json.ComponentExporter;

// Sling Models intended to be used with SPA Editor must extend ComponentExporter interface
public interface OpenWeatherModel extends ComponentExporter {

    public String getLabel();

}