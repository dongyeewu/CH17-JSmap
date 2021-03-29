package tw.tcnr24.m1701;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.webkit.WebView;

public class M1701 extends AppCompatActivity {

    private WebView webview;
//    / 自建的html檔名 要跟裏頭的html名稱一樣 並不能空白 特殊符號
    private static  String MAP_URL = "file:///android_asset/how.html";


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.m1701);
        setupViewComponent();
    }

    private void setupViewComponent() {
        webview=(WebView)findViewById(R.id.webview);
        webview.getSettings().setJavaScriptEnabled(true);

    }

    public boolean onCreateOptionsMenu(Menu menu) {//選擇哪個layout的檔名
        getMenuInflater().inflate(R.menu.menu, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {
        switch (item.getItemId()) {
            case R.id.action_settings:
                this.finish();
                break;
            case R.id.Item01:
                MAP_URL = "file:///android_asset/how.html";
                webview.loadUrl(MAP_URL);
                break;
            case R.id.Item02:
                MAP_URL = "file:///android_asset/24/20210305_map.html";
                webview.loadUrl(MAP_URL);
                break;

        }
        return super.onOptionsItemSelected(item);
    }

    @Override
    public void onBackPressed() {

    }
}