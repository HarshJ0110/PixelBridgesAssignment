// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget(props) {
  const container = useRef();

  const {name} = props;
  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "${name}",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "in",
          "enable_publishing": false,
          "backgroundColor": "rgba(0, 0, 0, 1)",
          "allow_symbol_change": true,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
    },
    [name]
  );

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
      <div className="tradingview-widget-copyright"><a href="https://in.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
    </div>
  );
}

export default memo(TradingViewWidget);