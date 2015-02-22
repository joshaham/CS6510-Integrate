package com.google.appinventor.server.project.youngandroid;

import java.util.Iterator;
import java.util.StringTokenizer;

import org.json.JSONObject;

public class ListView {


	String backgroundColor="#FFFFFF";
	String elementsFromString;
	String textSize="14";
	String textColor="#000000";
	String visible="true";
	String width="auto";
	String height="auto";

	String name="";
	String type="ListView";

	public String getBackgroundColor() {
		return backgroundColor;
	}
	public void setBackgroundColor(String backgroundColor) {
		this.backgroundColor = backgroundColor;
	}
	public String getElementsFromString() {
		return elementsFromString;
	}
	public void setElementsFromString(String elementsFromString) {
		this.elementsFromString = elementsFromString;
	}
	public String getTextSize() {
		return textSize;
	}
	public void setTextSize(String textSize) {
		this.textSize = textSize;
	}
	public String getTextColor() {
		return textColor;
	}
	public void setTextColor(String textColor) {
		this.textColor = textColor;
	}
	public String getVisible() {
		return visible;
	}
	public void setVisible(String visible) {
		this.visible = visible;
	}
	public String getWidth() {
		return width;
	}
	public void setWidth(String width) {
		this.width = width;
	}
	public String getHeight() {
		return height;
	}
	public void setHeight(String height) {
		this.height = height;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}

	private String generateCSSforComponent()
	{
		StringBuilder sb=new StringBuilder();
		sb.append("#"+this.getName()+"\n");
		sb.append("{\n");


		sb.append(" background : "+this.getBackgroundColor()+";\n");
		sb.append(" font-size :"+this.getTextSize()+";\n");
		sb.append(" color : "+this.getTextColor()+";\n");
		sb.append(" width : "+this.getWidth()+";\n");
		sb.append(" height : "+this.getHeight()+";\n");


		sb.append("}\n");



		return sb.toString().valueOf(sb);
	}

	private String generateHTMLforComponent()
	{
		StringBuilder sb=new StringBuilder();


		sb.append("<ul");


		sb.append(" id="+"\""+this.getName()+"\"");
		sb.append(">");

		StringTokenizer tokens=new StringTokenizer(this.getElementsFromString(), ",");
		while(tokens.hasMoreTokens())
		{
			sb.append("<li>");
			sb.append(tokens.nextToken());
			sb.append("</li>");
		}
		if(this.getVisible().equals("False"))
			sb.append(" hidden");

		sb.append("</ul>"); 

		//System.out.println("HTML equivalent for button: "+sb.toString().valueOf(sb));
		return sb.toString().valueOf(sb);
	}

	public String[] getConvertedListViewString(JSONObject component)
	{
		String htmlCssString[]=new String[2];

		Iterator<String> itr=component.keys();
		try
		{
			while(itr.hasNext())
			{
				String str=itr.next();

				if(str.equals("BackgroundColor"))
				{
					StringBuilder color=new StringBuilder(component.getString(str));
					color.replace(0, 4, "#");			    	 		
					this.setBackgroundColor(color.toString().valueOf(color));
				}
				else if(str.equals("ElementsFromString"))
					this.setElementsFromString(component.getString(str));
				else if(str.equals("TextSize"))
					this.setTextSize(component.getString(str)+"px");
				else if(str.equals("TextColor"))
				{
					StringBuilder color=new StringBuilder(component.getString(str));
					color.replace(0, 4, "#");			    	 		
					this.setTextColor(color.toString().valueOf(color));
				}
				else if(str.equals("Visible"))
					this.setVisible(component.getString(str));	 
				else if(str.equals("Width"))
				{
					if(component.getString("Width").equalsIgnoreCase("Automatic"))
						this.setWidth("auto");
					else if(component.getString("Width").equalsIgnoreCase("Fill Parent"))
						this.setWidth("100%");
					else
						this.setWidth(component.getString(str)+"px");
				}
				else if(str.equals("Height"))
				{
					if(component.getString("Height").equalsIgnoreCase("Automatic"))
						this.setHeight("auto");
					else if(component.getString("Height").equalsIgnoreCase("Fill Parent"))
						this.setHeight("100%");
					else
						this.setHeight(component.getString(str)+"px");
				}
				else if(str.equals("$Name"))
					this.setName(component.getString(str));		 
				else if(str.equals("$Type"))
					this.setType(component.getString(str));
			}

		}
		catch(Exception e)
		{
			e.printStackTrace();
		}

		htmlCssString[0]=generateHTMLforComponent();
		htmlCssString[1]=generateCSSforComponent();
		return htmlCssString;

	}



}
