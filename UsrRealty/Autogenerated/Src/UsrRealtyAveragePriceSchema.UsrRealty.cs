﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealtyAveragePriceSchema

	/// <exclude/>
	public class UsrRealtyAveragePriceSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealtyAveragePriceSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealtyAveragePriceSchema(UsrRealtyAveragePriceSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("c66738af-5b93-4193-b03d-016b8f61c8cc");
			Name = "UsrRealtyAveragePrice";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("752df71f-54dd-4b23-a41a-c210357535cc");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,237,84,77,111,26,49,16,189,71,202,127,176,56,237,70,116,163,94,75,83,9,40,32,42,81,80,150,136,67,212,131,241,14,196,170,215,222,248,131,118,69,242,223,59,187,118,186,75,74,130,170,94,122,136,15,96,207,188,121,51,243,236,89,73,115,48,5,101,64,150,160,53,53,106,99,147,161,146,27,190,117,154,90,174,228,249,217,254,252,140,224,114,134,203,45,73,75,99,33,79,82,208,59,206,96,166,50,16,189,19,254,100,5,235,147,152,62,179,124,87,39,60,128,54,69,33,9,22,150,231,207,0,129,171,242,166,96,12,198,167,150,90,120,129,100,168,52,36,159,7,71,24,94,12,8,25,189,251,54,212,140,10,89,77,153,253,22,204,125,83,124,5,139,224,2,91,88,115,193,109,121,13,247,142,107,200,65,90,19,181,15,85,191,228,138,156,8,169,80,73,48,100,113,200,83,184,181,224,140,48,65,141,33,55,70,95,3,21,182,236,239,64,211,45,44,52,22,70,62,144,1,53,16,202,236,146,41,66,178,185,20,101,91,28,79,182,127,106,170,90,151,23,205,254,118,94,128,191,251,103,109,214,78,84,122,42,119,234,59,68,51,176,119,42,195,86,58,147,209,178,211,37,85,181,96,236,88,233,156,90,52,35,114,134,89,177,52,111,74,190,24,37,187,100,160,178,50,181,165,128,3,200,111,107,178,210,180,40,32,235,54,57,171,117,141,175,84,73,3,175,179,199,173,74,131,88,25,48,158,83,65,38,96,219,66,69,19,199,51,98,203,2,166,89,151,212,7,181,217,128,94,214,150,184,161,217,31,214,193,55,36,242,81,201,212,140,242,194,150,81,76,30,30,218,193,141,35,38,26,172,211,146,188,123,223,107,171,93,173,20,4,48,75,140,255,187,34,18,126,4,91,116,99,64,163,244,18,247,120,9,241,97,92,181,240,89,10,151,203,104,236,36,75,250,187,109,212,193,199,80,183,213,137,143,193,199,90,229,53,198,63,152,206,49,204,234,14,52,180,64,190,151,78,92,117,115,239,168,136,124,206,100,65,53,126,50,44,232,32,195,209,132,125,153,181,168,230,141,54,175,241,181,245,63,66,74,77,208,231,15,41,159,174,88,131,113,162,210,210,139,154,140,126,2,115,22,82,70,5,213,31,3,234,83,20,247,14,195,195,29,249,232,150,239,177,217,94,92,86,57,255,101,68,22,243,244,255,159,145,33,21,204,9,252,66,188,77,202,219,164,252,221,164,248,67,189,193,159,95,33,61,89,33,86,8,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("c66738af-5b93-4193-b03d-016b8f61c8cc"));
		}

		#endregion

	}

	#endregion

}

