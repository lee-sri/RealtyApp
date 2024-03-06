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
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,133,84,193,110,219,48,12,189,23,232,63,8,62,217,64,38,96,215,117,29,224,116,73,144,1,89,138,56,69,14,197,14,138,205,164,194,100,201,149,232,108,70,218,127,31,109,169,141,211,165,141,14,182,76,62,62,146,143,132,181,40,193,85,34,7,182,4,107,133,51,27,228,55,70,111,228,182,182,2,165,209,151,23,251,203,11,70,167,118,82,111,89,214,56,132,146,103,96,119,50,135,153,41,64,93,157,241,243,21,172,207,98,210,28,229,174,75,120,4,61,20,69,36,84,88,89,190,1,4,174,214,155,129,115,20,159,161,64,120,135,228,198,88,224,223,135,39,24,222,13,8,25,189,251,62,212,76,10,161,21,57,254,10,230,212,85,63,1,9,92,81,11,107,169,36,54,11,120,172,165,133,18,52,186,184,255,209,246,203,174,217,153,144,22,197,131,161,72,66,158,170,94,43,153,179,92,9,231,216,157,179,11,16,10,155,116,7,86,108,225,214,82,97,236,11,27,10,7,161,204,1,155,18,164,152,107,213,244,197,241,100,251,174,41,127,239,154,152,87,224,71,254,166,187,206,73,2,79,245,206,252,134,120,6,248,96,10,234,32,154,140,150,209,128,181,69,130,195,177,177,165,64,50,19,114,70,201,168,34,111,226,63,156,209,3,54,52,69,147,97,163,224,8,242,106,229,43,43,170,10,138,193,33,103,123,22,180,156,70,59,248,152,61,233,85,26,52,42,32,151,165,80,108,2,216,215,39,158,212,178,96,216,84,48,45,6,172,251,48,155,13,216,101,103,73,14,52,251,227,58,228,134,197,62,138,79,221,168,172,176,137,19,246,244,212,15,62,56,18,102,1,107,171,217,167,207,175,155,243,114,50,80,144,35,115,254,117,205,52,252,9,182,248,206,129,37,233,53,221,105,8,201,113,92,123,104,27,85,93,234,120,92,235,156,167,187,109,28,209,14,116,109,69,201,41,248,216,154,178,195,248,61,137,78,97,86,15,96,161,7,242,189,68,73,219,205,99,45,84,236,115,242,91,97,233,79,129,96,131,12,39,19,166,186,232,81,205,15,218,124,196,215,215,255,4,169,112,65,159,255,164,124,25,177,5,87,171,86,75,47,42,31,253,133,188,70,200,114,161,132,253,26,80,223,226,228,234,56,60,204,200,71,247,124,207,254,250,220,166,163,199,63,113,75,96,48,33,5,0,0 };
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
