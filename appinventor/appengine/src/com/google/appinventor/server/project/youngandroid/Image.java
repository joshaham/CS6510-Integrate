package com.google.appinventor.server.project.youngandroid;

import java.util.Iterator;

import org.json.JSONObject;

public class Image {

	String source="";
	String visible="true";
	String width="";
	String height="";
	
	String type="Image";
	String name="";
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
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
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	private String generateCSSforComponent()
	{
		StringBuilder sb=new StringBuilder();
		sb.append("#"+this.getName()+"\n");
		sb.append("{\n");

		sb.append(" width : "+this.getWidth()+";\n");
		sb.append(" height : "+this.getHeight()+";\n");
		
		sb.append("}\n");

		// System.out.println(sb.toString().valueOf(sb));

		return sb.toString().valueOf(sb);
	}

	private String generateHTMLforComponent()
	{
		StringBuilder sb=new StringBuilder();

		sb.append("<img");
		sb.append(" id="+"\""+this.getName()+"\"");
		

		if(this.getVisible().equals("False"))
			sb.append(" hidden");

		sb.append(">");

		sb.append("</img>"); 

		//System.out.println("HTML equivalent for button: "+sb.toString().valueOf(sb));
		return sb.toString().valueOf(sb);
	}

	public String[] getConvertedTextBoxString(JSONObject component)
	{
		String htmlCssString[]=new String[2];

		Iterator<String> itr=component.keys();

		try
		{
			while(itr.hasNext())
			{
				String str=itr.next();


				if(str.equals("Picture"))
					this.setSource(component.getString(str));

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
