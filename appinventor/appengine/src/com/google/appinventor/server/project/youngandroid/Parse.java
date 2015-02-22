package com.google.appinventor.server.project.youngandroid;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

import org.json.*;



public class Parse {


   public static ArrayList<String[]> arrayList=new ArrayList<String[]>();

	public final String JSON_DATA =
			"{\"YaVersion\":\"113\",\"Source\":\"Form\",\"Properties\":{\"$Name\":\"Screen1\",\"$Type\":\"Form\",\"$Version\":\"13\",\"Uuid\":\"0\",\"Title\":\"Demo Screen\",\"$Components\":[{\"$Name\":\"Button1\",\"$Type\":\"Button\",\"$Version\":\"6\",\"Uuid\":\"-1727713546\",\"Text\":\"Button text\"},{\"$Name\":\"Label1\",\"$Type\":\"Label\",\"$Version\":\"3\",\"Uuid\":\"-138702593\",\"Text\":\"Label text\"},{\"$Name\":\"TextBox1\",\"$Type\":\"TextBox\",\"$Version\":\"4\",\"Uuid\":\"571333737\",\"Hint\":\"textbox hint\",\"Text\":\"Textbox default text\"},{\"$Name\":\"PasswordTextBox1\",\"$Type\":\"PasswordTextBox\",\"$Version\":\"2\",\"Uuid\":\"1520811984\"},{\"$Name\":\"CheckBox1\",\"$Type\":\"CheckBox\",\"$Version\":\"2\",\"Uuid\":\"-827431762\",\"Text\":\"Checkbox text\"},{\"$Name\":\"ListPicker2\",\"$Type\":\"ListPicker\",\"$Version\":\"8\",\"Uuid\":\"480371101\",\"Text\":\"ListView text\"},{\"$Name\":\"DatePicker1\",\"$Type\":\"DatePicker\",\"$Version\":\"2\",\"Uuid\":\"946618737\",\"Text\":\"DatePicker text\"}]}}";
	// "{\"$Components\":[{\"$Name\":\"Button1\",\"$Type\":\"Button\",\"$Version\":\"6\",\"Uuid\":\"-1727713546\",\"Text\":\"Button text\"},{\"$Name\":\"Label1\",\"$Type\":\"Label\",\"$Version\":\"3\",\"Uuid\":\"-138702593\",\"Text\":\"Label text\"},{\"$Name\":\"TextBox1\",\"$Type\":\"TextBox\",\"$Version\":\"4\",\"Uuid\":\"571333737\",\"Hint\":\"textbox hint\",\"Text\":\"Textbox default text\"},{\"$Name\":\"PasswordTextBox1\",\"$Type\":\"PasswordTextBox\",\"$Version\":\"2\",\"Uuid\":\"1520811984\"},{\"$Name\":\"CheckBox1\",\"$Type\":\"CheckBox\",\"$Version\":\"2\",\"Uuid\":\"-827431762\",\"Text\":\"Checkbox text\"},{\"$Name\":\"ListPicker2\",\"$Type\":\"ListPicker\",\"$Version\":\"8\",\"Uuid\":\"480371101\",\"Text\":\"ListView text\"},{\"$Name\":\"DatePicker1\",\"$Type\":\"DatePicker\",\"$Version\":\"2\",\"Uuid\":\"946618737\",\"Text\":\"DatePicker text\"}]}";
			
	
	//"{"YaVersion":"113","Source":"Form","Properties":{"Name":"Screen1","Type":"Form","Version":"13","Uuid":"0","Title":"Demo Screen","Components":[{"Name":"Button1","Type":"Button","Version":"6","Uuid":"-1727713546","Text":"Button text"},{"Name":"Label1","Type":"Label","Version":"3","Uuid":"-138702593","Text":"Label text"},{"Name":"TextBox1","Type":"TextBox","Version":"4","Uuid":"571333737","Hint":"textbox hint","Text":"Textbox default text"},{"Name":"PasswordTextBox1","Type":"PasswordTextBox","Version":"2","Uuid":"1520811984"},{"Name":"CheckBox1","Type":"CheckBox","Version":"2","Uuid":"-827431762","Text":"Checkbox text"},{"Name":"ListPicker2","Type":"ListPicker","Version":"8","Uuid":"480371101","Text":"ListView text"},{"Name":"DatePicker1","Type":"DatePicker","Version":"2","Uuid":"946618737","Text":"DatePicker text"}]}}";
			//"{\"YaVersion\":\"113\",\"Source\":\"Form\",\"Properties\":{\"Name\":\"Screen1\",\"Type\":\"Form\",\"Version\":\"13\",\"Uuid\":\"0\",\"Title\":\"Demo Screen\",\"Components\":[{\"Name\":\"Button1\",\"Type\":\"Button\",\"Version\":\"6\",\"Uuid\":\"-1727713546\",\"Text\":\"Button text\"},{\"Name\":\"Label1\",\"Type\":\"Label\",\"Version\":\"3\",\"Uuid\":\"-138702593\",\"Text\":\"Label text\"},{\"Name\":\"TextBox1\",\"Type\":\"TextBox\",\"Version\":\"4\",\"Uuid\":\"571333737\",\"Hint\":\"textbox hint\",\"Text\":\"Textbox default text\"},{\"Name\":\"PasswordTextBox1\",\"Type\":\"PasswordTextBox\",\"Version\":\"2\",\"Uuid\":\"1520811984\"},{\"Name\":\"CheckBox1\",\"Type\":\"CheckBox\",\"Version\":\"2\",\"Uuid\":\"-827431762\",\"Text\":\"Checkbox text\"},{\"Name\":\"ListPicker2\",\"Type\":\"ListPicker\",\"Version\":\"8\",\"Uuid\":\"480371101\",\"Text\":\"ListView text\"},{\"Name\":\"DatePicker1\",\"Type\":\"DatePicker\",\"Version\":\"2\",\"Uuid\":\"946618737\",\"Text\":\"DatePicker text\"}]}}";
			/*	"{" 
					+ "  \"$Components\": [" 
					+ "    {" 
					+ "      \"Name\": \"Button1\"," 
					+ "      \"Type\": \"Button\","                  
					+ "      \"Version\" : \"6\"," 
					+ "      \"Uuid\" : \"-85218753\"," 
					+ "      \"BackgroundColor\" : \"&HFF0000FF\","
					+ "      \"FontBold\" : \"True\","
					+ "      \"FontItalic\" : \"True\","
					+ "      \"FontTypeface\" : \"2\","
					+ "      \"Image\" : \"usecaseDiagram.png\","
					+ "      \"Text\" : \"Demo Button\","
					+ "      \"TextColor\" : \"&HFFFFFFFF\","
					+ "      \"Visible\" : \"True\","
					+ "      \"Width\" : \"100\","
					+ "      \"Enabled\" : \"True\","
					+ "      \"Height\" : \"100\""
					+ "    }," 
					+ "    {" 
					+ "      \"Name\": \"Button2\"," 
					+ "      \"Type\": \"Button\","                  
					+ "      \"Version\" : \"6\"," 
					+ "      \"Uuid\" : \"-85218753\"," 
					+ "      \"BackgroundColor\" : \"&HFF0000FF\","
					+ "      \"FontBold\" : \"True\","
					+ "      \"FontItalic\" : \"False\","
					+ "      \"FontTypeface\" : \"2\","
					+ "      \"Visible\" : \"False\","
					+ "      \"Width\" : \"Automatic\","
					+ "      \"Enabled\" : \"False\","
					+ "      \"Text\" : \"Demo Button2\","
					+ "      \"Height\" : \"100\""
					+ "    },"

		   +" {\"Name\":\"Label1\",\"Type\":\"Label\",\"Version\":\"3\",\"Uuid\":\"334753703\",\"BackgroundColor\":\"&HFF0000FF\",\"FontBold\":\"True\",\"FontItalic\":\"True\",\"FontSize\":\"16.0\",\"FontTypeface\":\"2\",\"HasMargins\":\"False\",\"Text\":\"TESTLABLE\",\"TextAlignment\":\"1\",\"TextColor\":\"&HFF444444\",\"Width\":\"100\",\"Height\":\"20\"},"
		   +" {\"Name\":\"TextBox1\",\"Type\":\"TextBox\",\"Version\":\"5\",\"Uuid\":\"-88103695\",\"BackgroundColor\":\"&HFFCCCCCC\",\"FontBold\":\"True\",\"FontItalic\":\"True\",\"FontSize\":\"16.0\",\"FontTypeface\":\"3\",\"Hint\":\"Hint TextBox1\",\"Text\":\"test text\",\"TextAlignment\":\"1\",\"TextColor\":\"&HFFFFAFAF\",\"Width\":\"100\",\"Height\":\"20\"},"

		   +"{\"Name\":\"TextBox2\",\"Type\":\"TextBox\",\"Version\":\"5\",\"Uuid\":\"-315586597\",\"FontBold\":\"True\",\"FontSize\":\"15.0\",\"Hint\":\"Hint for TextBox2\",\"MultiLine\":\"True\"},"
		   +"{\"Name\":\"PasswordTextBox1\",\"Type\":\"PasswordTextBox\",\"Version\":\"2\",\"Uuid\":\"1954035653\",\"BackgroundColor\":\"&HFF444444\",\"FontBold\":\"True\",\"FontItalic\":\"True\",\"FontSize\":\"15.0\",\"FontTypeface\":\"3\",\"Hint\":\"password hint\",\"Text\":\"rewq\",\"TextAlignment\":\"1\",\"TextColor\":\"&HFFFFC800\",\"Width\":\"100\",\"Height\":\"20\"},"
		   +"{\"Name\":\"CheckBox1\",\"Type\":\"CheckBox\",\"Version\":\"2\",\"Uuid\":\"-1889258357\",\"Checked\":\"True\",\"FontBold\":\"True\",\"FontItalic\":\"True\",\"FontSize\":\"16.0\",\"FontTypeface\":\"3\",\"Text\":\"Text fo\",\"TextColor\":\"&HFF888888\",\"Width\":\"100\",\"Height\":\"20\"},"
		   +"{\"Name\":\"ListView1\",\"Type\":\"ListView\",\"Version\":\"4\",\"Uuid\":\"1276881375\",\"ElementsFromString\":\"1,2,3,4,5\",\"Selection\":\"3\",\"TextColor\":\"&HFF00FFFF\",\"TextSize\":\"23\",\"Width\":\"100\",\"Height\":\"200\"},"
		   +"{\"Name\":\"DatePicker1\",\"Type\":\"DatePicker\",\"Version\":\"2\",\"Uuid\":\"946618737\",\"Text\":\"DatePicker text\"}"
		   + "  ]" 
		   + "}"; 
*/
	private static String formatJsonString(String jsonString)
	{
		StringBuilder sb=new StringBuilder();
		for(int i=0;i<sb.length();i++)
		{
			char c=sb.charAt(i);

			if(c=='$')
				sb.deleteCharAt(i);
			if(c=='"')
				sb.insert(i-1, "\\");
		}
		
		System.out.println("new :"+ sb.toString().valueOf(sb));
		
		return sb.toString().valueOf(sb);
	}


	public static ArrayList<String[]> parseJsonString(String jsonString) throws JSONException {

		if(jsonString==null||jsonString.equals(""))
			return arrayList;
		
		final JSONObject obj = new JSONObject(jsonString);
		final JSONObject obj2=obj.getJSONObject("Properties");
		
		final JSONArray components = obj2.getJSONArray("$Components");		    
		String[] htmlCssString=new String[2];
	    arrayList=new ArrayList<String[]>();
		for (int i = 0; i < components.length(); ++i) {
			final JSONObject component = components.getJSONObject(i);

			//System.out.println("component type: "+component.getString("Type"));

			if(component.getString("$Type").equals("Button"))
			{
				Button b=new Button();
				htmlCssString=b.getConvertedButtonString(component);
			}
			else if(component.getString("$Type").equalsIgnoreCase("Label"))
			{
				Label l=new Label();
				htmlCssString=l.getConvertedLabelString(component);
			}
			else if(component.getString("$Type").equalsIgnoreCase("TextBox"))
			{
				TextBox tb=new TextBox();
				htmlCssString=tb.getConvertedTextBoxString(component);
			}
			else if(component.getString("$Type").equalsIgnoreCase("PasswordTextBox"))
			{
				PasswordTextBox pstb=new PasswordTextBox();
				htmlCssString=pstb.getConvertedPasswordTextBoxString(component);
			}
			else if(component.getString("$Type").equalsIgnoreCase("CheckBox"))
			{
				CheckBox cb=new CheckBox();
				htmlCssString=cb.getConvertedCheckBoxString(component);
			}
					      else if(component.getString("$Type").equalsIgnoreCase("DatePicker"))
		      {
		    	 DatePicker dp=new DatePicker();
		    	  htmlCssString=dp.getConvertedDatePickerString(component);
		      }
			
			
			else if(component.getString("$Type").equalsIgnoreCase("ListView"))
				{
					ListView lv=new ListView();
					htmlCssString=lv.getConvertedListViewString(component);
				}
			 

			arrayList.add(htmlCssString);
			/*System.out.println(htmlCssString[0]);
			System.out.println(htmlCssString[1]);*/

		}
		return arrayList;
	}


	//testing
	public static void main(String args[]) 
	{
		try
		{
			Parse p=new Parse();
			ArrayList<String[]> arr=new ArrayList<String[]>();
			//String str=formatJsonString(p.JSON_DATA);
			
			arr=p.parseJsonString(p.JSON_DATA);

			//display HTML contents

			Iterator<String[]> itr1=arr.iterator();
			while(itr1.hasNext())
			{
				System.out.println(itr1.next()[0]);
			}

			//	display CSS contents

			Iterator<String[]> itr2=arr.iterator();
			while(itr2.hasNext())
			{
				System.out.println(itr2.next()[1]);
			}


		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
	}

}
