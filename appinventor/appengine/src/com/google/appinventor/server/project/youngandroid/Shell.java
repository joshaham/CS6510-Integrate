package com.google.appinventor.server.project.youngandroid;
import java.util.ArrayList;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.json.JSONException;

public class Shell {

	// this function will be called by "build" if we have all the data
	public static String stitchBuildHTML(String blocklyJavascript, String componentJSON) {

		ArrayList<String[]> componentPackage;	// component data format after parsing the data-store contents
		String componentHTML;					// this is a string
		String componentCSS;					// this is also a string and currently is not implemented
		String buildPageHTMLString;			// String for the output
		StringBuilder htmlStringBuilder;		// StringBuilder for building the page line-by-line
		Pattern componentJSONPattern;			// regular expression for use in processing the
		// data-store component JSON string.
		Matcher componentJSONMatcher;			// Matcher for parsing component JSON String.
		String strippedComponentJSON;			// component data after removing non-required characters

		componentPackage = new ArrayList<>() ;
		//blocklyJavascript = blocklyJavascript;		// set JS object

		// remove non-required characters and send component JSON for parsing
		componentJSONPattern = Pattern.compile("([^{]+)([^|]+)(.*)");
		componentJSONMatcher = componentJSONPattern.matcher(componentJSON);
		boolean b = componentJSONMatcher.matches();					// exception found without this line. very strange.
		strippedComponentJSON = componentJSONMatcher.group(2).trim();

		try {	
			componentPackage = Parse.parseJsonString(strippedComponentJSON);
		}
		catch (JSONException ex)
		{
			ex.printStackTrace();
		}

		htmlStringBuilder = new StringBuilder();  		// reset the HTML output string
		buildPageHTMLString = null;  		// reset accumulator for HTML string

		// build the page sections
		htmlStringBuilder.append("<!doctype html>\n");
		htmlStringBuilder.append("<html lang='en'>\n");
		htmlStringBuilder.append("<head>\n");
		htmlStringBuilder.append("<meta charset='utf-8'>\n");
		htmlStringBuilder.append("<title>My New AppInventor Web App</title>\n");

		// HARDCODED CSS FOR NOW
		/*	htmlStringBuilder.append("<style>\n");
	htmlStringBuilder.append("#Button1\n");
	htmlStringBuilder.append("{\n");
	htmlStringBuilder.append("background : #0000FF;\n");
	htmlStringBuilder.append("font-size : 14px;\n");
	htmlStringBuilder.append("font-weight : bold;\n");
	htmlStringBuilder.append("width : 100px;\n");
	htmlStringBuilder.append("height : 100px;\n");
	htmlStringBuilder.append("font-style : italic;\n");
	htmlStringBuilder.append("font-family : serif;\n");
	htmlStringBuilder.append("background-image : usecaseDiagram.png;\n");
	htmlStringBuilder.append("color : #FFFFFF;\n");
	htmlStringBuilder.append("border-radius : 0px;\n");
	htmlStringBuilder.append("text-align : left;\n");
	htmlStringBuilder.append("}\n");

	htmlStringBuilder.append("\n");

	htmlStringBuilder.append("<style>\n");
	htmlStringBuilder.append("#Button2\n");
	htmlStringBuilder.append("{\n");
	htmlStringBuilder.append("background : #0000FF;\n");
	htmlStringBuilder.append("font-size : 14px;\n");
	htmlStringBuilder.append("font-weight : bold;\n");
	htmlStringBuilder.append("width : auto;\n");
	htmlStringBuilder.append("height : 100px;\n");
	htmlStringBuilder.append("font-style : none;\n");
	htmlStringBuilder.append("font-family : serif;\n");
	htmlStringBuilder.append("background-image : ;\n");
	htmlStringBuilder.append("color : #000000;\n");
	htmlStringBuilder.append("border-radius : 0px;\n");
	htmlStringBuilder.append("text-align : left;\n");
	htmlStringBuilder.append("}\n");

	htmlStringBuilder.append("\n");

	htmlStringBuilder.append("#Label1\n");
	htmlStringBuilder.append("{\n");
	htmlStringBuilder.append("background : #0000FF;\n");
	htmlStringBuilder.append("font-size : 16.0px;\n");
	htmlStringBuilder.append("font-weight : bold;\n");
	htmlStringBuilder.append("font-style : italic;\n");
	htmlStringBuilder.append("font-family : sans-serif;\n");
	htmlStringBuilder.append("text-align : left;\n");
	htmlStringBuilder.append("color : #444444;\n");
	htmlStringBuilder.append("width : 100px;\n");
	htmlStringBuilder.append("height : 20px;\n");
	htmlStringBuilder.append("border :none;\n");
	htmlStringBuilder.append("}\n");

	htmlStringBuilder.append("\n");

	htmlStringBuilder.append("#TextBox1\n");
	htmlStringBuilder.append("{\n");
	htmlStringBuilder.append("background : #CCCCCC;\n");
	htmlStringBuilder.append("font-size : 16.0px;\n");
	htmlStringBuilder.append("font-weight : bold;\n");
	htmlStringBuilder.append("font-style : italic;\n");
	htmlStringBuilder.append("font-family : monospace;\n");
	htmlStringBuilder.append("text-align : center;\n");
	htmlStringBuilder.append("color : #FFAFAF;\n");
	htmlStringBuilder.append("width : 100px;\n");
	htmlStringBuilder.append("height : 20px;\n");
	htmlStringBuilder.append("}\n");

	htmlStringBuilder.append("\n");

	htmlStringBuilder.append("#TextBox2\n");
	htmlStringBuilder.append("{\n");
	htmlStringBuilder.append("background : #FFFFFF;\n");
	htmlStringBuilder.append("font-size : 15.0px;\n");
	htmlStringBuilder.append("font-weight : bold;\n");
	htmlStringBuilder.append("font-style : none;\n");
	htmlStringBuilder.append("font-family : sans-serif;\n");
	htmlStringBuilder.append("text-align : left;\n");
	htmlStringBuilder.append("color : #000000;\n");
	htmlStringBuilder.append("width : auto;\n");
	htmlStringBuilder.append("height : auto;\n");
	htmlStringBuilder.append("}\n");

	htmlStringBuilder.append("\n");

	htmlStringBuilder.append("#PasswordTextBox1\n");
	htmlStringBuilder.append("{\n");
	htmlStringBuilder.append("background : #444444;\n");
	htmlStringBuilder.append("font-size : 15.0px;\n");
	htmlStringBuilder.append("font-weight : bold;\n");
	htmlStringBuilder.append("font-style : italic;\n");
	htmlStringBuilder.append("font-family : monospace;\n");
	htmlStringBuilder.append("text-align : center;\n");
	htmlStringBuilder.append("color : #FFC800;\n");
	htmlStringBuilder.append("width : 100px;\n");
	htmlStringBuilder.append("height : 20px;\n");
	htmlStringBuilder.append("}\n");

	htmlStringBuilder.append("\n");

	htmlStringBuilder.append("#CheckBox1\n");
	htmlStringBuilder.append("{\n");
	htmlStringBuilder.append("background : #FFFFFF;\n");
	htmlStringBuilder.append("font-size : 16.0px;\n");
	htmlStringBuilder.append("font-weight : bold;\n");
	htmlStringBuilder.append("font-style : italic;\n");
	htmlStringBuilder.append("font-family : serif;\n");
	htmlStringBuilder.append("color : #888888;\n");
	htmlStringBuilder.append("width : 100px;\n");
	htmlStringBuilder.append("height : 20px;\n");
	htmlStringBuilder.append("}\n");

	htmlStringBuilder.append("\n");

	htmlStringBuilder.append("#ListView1\n");
	htmlStringBuilder.append("{\n");
	htmlStringBuilder.append("background : #FFFFFF;\n");
	htmlStringBuilder.append("font-size : 23px;\n");
	htmlStringBuilder.append("color : #00FFFF;\n");
	htmlStringBuilder.append("width : 100px;\n");
	htmlStringBuilder.append("height : 20px;\n");
	htmlStringBuilder.append("}\n");

	htmlStringBuilder.append("\n");

	htmlStringBuilder.append("#LabelPicker1\n");
	htmlStringBuilder.append("{\n");
	htmlStringBuilder.append("background : #FFFFFF;\n");
	htmlStringBuilder.append("text-align : left;\n");
	htmlStringBuilder.append("font-weight : none;\n");
	htmlStringBuilder.append("font-style : none;\n");
	htmlStringBuilder.append("font-family : sans-serif;\n");
	htmlStringBuilder.append("font-size : 14px;\n");
	htmlStringBuilder.append("color : #000000;\n");
	htmlStringBuilder.append("width : auto;\n");
	htmlStringBuilder.append("height : auto;\n");
	htmlStringBuilder.append("border-radius : 0px;\n");
	htmlStringBuilder.append("}\n");

	htmlStringBuilder.append("</style>\n");
	htmlStringBuilder.append("\n");
		 */	// HARDCODED CSS FOR NOW

		// NON-HARDCODED CSS
		if (!componentPackage.isEmpty()) {					// loop through the CSS lines if there are any.
			htmlStringBuilder.append("<style>\n");
			for (String[] component : componentPackage) {
				htmlStringBuilder.append(component[1] + "\n");
			}
			htmlStringBuilder.append("</style>\n");
			htmlStringBuilder.append("\n");
		}
		// NON-HARDCODED CSS

		// HARDCODED JS FOR NOW
		/*	htmlStringBuilder.append("<script>\n");
	htmlStringBuilder.append("window.onload = function(){\n");
	htmlStringBuilder.append("document.getElementById('Button1').onclick = function(){\n");
	htmlStringBuilder.append("document.getElementById('Button1').innerHTML = 'Hello World!';\n");
	htmlStringBuilder.append("};\n");
	htmlStringBuilder.append("};\n");
	htmlStringBuilder.append("</script>\n");
		 */	// HARDCODED JS FOR NOW

		// NON-HARDCODED JS
		htmlStringBuilder.append("<script>\n");
		htmlStringBuilder.append(blocklyJavascript);
		htmlStringBuilder.append("</script>\n");
		// NON-HARDCODED JS

		htmlStringBuilder.append("</head>\n");
		htmlStringBuilder.append("<body>\n");

		// HARDCODED HTML FOR NOW
		/*	htmlStringBuilder.append("<button id='Button1' type='Button'>Demo Button</button>\n");
	htmlStringBuilder.append("<button id='Button2' type='Button' disabled hidden>Demo Button2</button>\n");
	htmlStringBuilder.append("<label id='Label1' type='Label'>TESTLABLE</label>\n");
	htmlStringBuilder.append("<input id='TextBox1' type='TextBox' title= 'Hint TextBox1' value= 'test text'></input>\n");
	htmlStringBuilder.append("<textarea id='TextBox2' type='TextBox' title= 'Hint for TextBox2' value= ''></textarea>\n");
	htmlStringBuilder.append("<input id='PasswordTextBox1' type='password' title= 'password hint' value= 'rewq'></input>\n");
	htmlStringBuilder.append("<input id='CheckBox1' type='checkbox'>Text fo</input>\n");
	htmlStringBuilder.append("<ul id='ListView1'><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li></ul>\n");
	htmlStringBuilder.append("<label id='labelDatePicker1'>DatePicker text</label>  <input id='DatePicker1' type='date'/>\n");
		 */	// HARDCODED HTML FOR NOW

		// NON-HARDCODED HTML
		if (!componentPackage.isEmpty()) {					// loop through the HTML lines if there are any.
			for (String[] component : componentPackage) {
				htmlStringBuilder.append(component[0] + "\n");
			}
		}
		// NON-HARDCODED HTML

		htmlStringBuilder.append("</body>\n");
		htmlStringBuilder.append("</html>");
		// end of page building

		buildPageHTMLString = htmlStringBuilder.toString();
		return buildPageHTMLString;

	}
}